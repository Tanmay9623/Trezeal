import { useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseVx: number;
    baseVy: number;
    radius: number;
    opacity: number;
    pulsePhase: number;
    pulseSpeed: number;
    hue: number;       // base hue 0-360
    hueSpeed: number;  // how fast hue drifts
}

interface Mouse {
    x: number;
    y: number;
    active: boolean;
}

interface Tilt {
    x: number; // -1 to 1
    y: number;
}

export const HeroBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let particles: Particle[] = [];

        // Mobile-aware constants
        const isMobile = canvas.width < 768;
        const PARTICLE_COUNT = isMobile ? 28 : 70;
        const CONNECTION_DISTANCE = isMobile ? 100 : 140;
        const REPULSION_RADIUS = 120;
        const REPULSION_STRENGTH = 2.2;

        // Interaction state
        const mouse: Mouse = { x: -999, y: -999, active: false };
        const tilt: Tilt = { x: 0, y: 0 };

        // ── Resize ──────────────────────────────────────────────────────────
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // ── Spawn particles ─────────────────────────────────────────────────
        // Hue palette: teal (175), violet (270), amber (38), coral (10), lime (130)
        const PALETTE = [175, 270, 38, 10, 130, 200, 310];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const vx = (Math.random() - 0.5) * 0.35;
            const vy = (Math.random() - 0.5) * 0.35;
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx, vy,
                baseVx: vx,
                baseVy: vy,
                radius: 2 + Math.random() * 2.5,
                opacity: 0.5 + Math.random() * 0.4,
                pulsePhase: Math.random() * Math.PI * 2,
                pulseSpeed: 0.018 + Math.random() * 0.025,
                hue: PALETTE[i % PALETTE.length] + (Math.random() - 0.5) * 25,
                hueSpeed: (Math.random() - 0.5) * 0.04,
            });
        }

        // ── Mouse / touch listeners ─────────────────────────────────────────
        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        };
        const onMouseLeave = () => { mouse.active = false; };
        const onTouchMove = (e: TouchEvent) => {
            const rect = canvas.getBoundingClientRect();
            const t = e.touches[0];
            mouse.x = t.clientX - rect.left;
            mouse.y = t.clientY - rect.top;
            mouse.active = true;
        };
        const onTouchEnd = () => { mouse.active = false; };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mouseleave", onMouseLeave);
        window.addEventListener("touchmove", onTouchMove, { passive: true });
        window.addEventListener("touchend", onTouchEnd);

        // ── Device orientation (mobile gyro tilt) ───────────────────────────
        let gyroSupported = false;
        const onDeviceOrientation = (e: DeviceOrientationEvent) => {
            gyroSupported = true;
            // gamma = left/right (-90 to 90), beta = front/back (-180 to 180)
            const gamma = Math.max(-45, Math.min(45, e.gamma ?? 0));
            const beta = Math.max(-45, Math.min(45, (e.beta ?? 0) - 45));
            tilt.x = gamma / 45;  // -1 to 1
            tilt.y = beta / 45;
        };
        window.addEventListener("deviceorientation", onDeviceOrientation, { passive: true });

        // ── Cursor ripple effect tracker ─────────────────────────────────────
        const ripples: { x: number; y: number; r: number; alpha: number }[] = [];
        let lastRippleTime = 0;

        const isDark = () => document.documentElement.classList.contains("dark");

        // ── Draw loop ────────────────────────────────────────────────────────
        const draw = () => {
            const dark = isDark();
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Tilt offset for whole canvas
            const tiltOffsetX = gyroSupported ? tilt.x * 18 : 0;
            const tiltOffsetY = gyroSupported ? tilt.y * 12 : 0;

            // ── Hexagonal grid ───────────────────────────────────────────────
            const HEX_SIZE = isMobile ? 38 : 52;
            const HEX_H = HEX_SIZE * Math.sqrt(3);
            const cols = Math.ceil(canvas.width / (HEX_SIZE * 1.5)) + 2;
            const rows = Math.ceil(canvas.height / HEX_H) + 2;

            ctx.save();
            ctx.translate(tiltOffsetX, tiltOffsetY);
            ctx.strokeStyle = dark ? "rgba(255,255,255,0.035)" : "rgba(0,0,0,0.045)";
            ctx.lineWidth = 1;
            for (let col = -1; col < cols; col++) {
                for (let row = -1; row < rows; row++) {
                    const xOff = col % 2 === 0 ? 0 : HEX_H / 2;
                    const cx = col * HEX_SIZE * 1.5;
                    const cy = row * HEX_H + xOff;
                    ctx.beginPath();
                    for (let a = 0; a < 6; a++) {
                        const angle = (Math.PI / 180) * (60 * a - 30);
                        const px = cx + HEX_SIZE * Math.cos(angle);
                        const py = cy + HEX_SIZE * Math.sin(angle);
                        a === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.stroke();
                }
            }
            ctx.restore();

            // ── Cursor ripple (hue-shifting) ──────────────────────────────────
            const now = Date.now();
            const rippleHue = (now * 0.05) % 360;
            if (mouse.active && now - lastRippleTime > 400) {
                ripples.push({ x: mouse.x, y: mouse.y, r: 0, alpha: 0.6 });
                lastRippleTime = now;
            }
            for (let i = ripples.length - 1; i >= 0; i--) {
                const rp = ripples[i];
                rp.r += 2.2;
                rp.alpha -= 0.012;
                if (rp.alpha <= 0) { ripples.splice(i, 1); continue; }
                ctx.beginPath();
                ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
                ctx.strokeStyle = `hsla(${rippleHue},90%,${dark ? 75 : 50}%,${rp.alpha})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }

            // ── Particles ────────────────────────────────────────────────────
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Mouse repulsion
                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < REPULSION_RADIUS && dist > 0) {
                        const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS;
                        p.vx += (dx / dist) * force * REPULSION_STRENGTH * 0.05;
                        p.vy += (dy / dist) * force * REPULSION_STRENGTH * 0.05;
                    }
                }

                // Tilt drift (mobile)
                if (gyroSupported) {
                    p.vx += tilt.x * 0.006;
                    p.vy += tilt.y * 0.006;
                }

                // Dampen velocity back to base speed
                p.vx = p.vx * 0.96 + p.baseVx * 0.04;
                p.vy = p.vy * 0.96 + p.baseVy * 0.04;

                p.x += p.vx;
                p.y += p.vy;

                // Wrap edges
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = canvas.height + 10;
                if (p.y > canvas.height + 10) p.y = -10;

                p.pulsePhase += p.pulseSpeed;
                p.hue = (p.hue + p.hueSpeed + 360) % 360;
                const pulseFactor = 0.7 + 0.3 * Math.sin(p.pulsePhase);
                const r = p.radius * pulseFactor;
                const sat = dark ? 80 : 70;
                const lit = dark ? 72 : 48;

                // Highlight boost when near mouse
                let nearMouse = 0;
                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    nearMouse = Math.max(0, 1 - d / REPULSION_RADIUS);
                }

                // Connections — gradient from p.hue → q.hue
                for (let j = i + 1; j < particles.length; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECTION_DISTANCE) {
                        const alpha = (1 - dist / CONNECTION_DISTANCE) * (0.45 + nearMouse * 0.35);
                        const grad = ctx.createLinearGradient(p.x, p.y, q.x, q.y);
                        grad.addColorStop(0, `hsla(${p.hue},${sat}%,${lit}%,${alpha})`);
                        grad.addColorStop(1, `hsla(${q.hue},${sat}%,${lit}%,${alpha})`);
                        ctx.beginPath();
                        ctx.strokeStyle = grad;
                        ctx.lineWidth = 0.8 + nearMouse * 0.8;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.stroke();
                    }
                }

                // Glow halo
                const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * (5 + nearMouse * 4));
                const glowAlpha = (0.22 + nearMouse * 0.3) * pulseFactor;
                glowGrad.addColorStop(0, `hsla(${p.hue},${sat}%,${dark ? 78 : 55}%,${glowAlpha})`);
                glowGrad.addColorStop(1, dark ? "rgba(0,0,0,0)" : "rgba(255,255,255,0)");
                ctx.beginPath();
                ctx.arc(p.x, p.y, r * (5 + nearMouse * 4), 0, Math.PI * 2);
                ctx.fillStyle = glowGrad;
                ctx.fill();

                // Core dot
                const opacity = p.opacity * pulseFactor + nearMouse * 0.35;
                ctx.beginPath();
                ctx.arc(p.x, p.y, r + nearMouse * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue},${sat}%,${lit}%,${opacity})`;
                ctx.fill();
            }

            // ── Rotating hex accents (desktop only) ──────────────────────────
            if (!isMobile) {
                const t = Date.now() * 0.0004;
                const tHue = (Date.now() * 0.01) % 360;
                const a = dark ? 0.10 : 0.09;
                drawHexOutline(ctx, canvas.width * 0.85 + tiltOffsetX * 1.4, canvas.height * 0.18 + tiltOffsetY * 1.4, 90, t, `hsla(${tHue},80%,65%,${a})`);
                drawHexOutline(ctx, canvas.width * 0.12 + tiltOffsetX * 1.6, canvas.height * 0.75 + tiltOffsetY * 1.6, 60, -t * 1.3, `hsla(${(tHue + 130) % 360},80%,65%,${a})`);
                drawHexOutline(ctx, canvas.width * 0.5 + tiltOffsetX, canvas.height * 0.88 + tiltOffsetY, 44, t * 0.7, `hsla(${(tHue + 260) % 360},80%,65%,${a})`);
            }

            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseleave", onMouseLeave);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("deviceorientation", onDeviceOrientation);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        />
    );
};

function drawHexOutline(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    size: number,
    rotation: number,
    color: string
) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;

    for (const scale of [1, 0.6]) {
        ctx.beginPath();
        for (let a = 0; a < 6; a++) {
            const angle = (Math.PI / 3) * a;
            const px = size * scale * Math.cos(angle);
            const py = size * scale * Math.sin(angle);
            a === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
    }
    ctx.restore();
}
