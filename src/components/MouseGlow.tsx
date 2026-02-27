import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

export const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const lastPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePos(newPos);
      setIsMoving(true);

      // Calculate velocity for particle direction
      const dx = newPos.x - lastPosRef.current.x;
      const dy = newPos.y - lastPosRef.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Spawn particles based on movement speed
      if (speed > 3) {
        const newParticles: Particle[] = [];
        const particleCount = Math.min(Math.floor(speed / 8), 3);
        
        for (let i = 0; i < particleCount; i++) {
          newParticles.push({
            id: particleIdRef.current++,
            x: newPos.x + (Math.random() - 0.5) * 20,
            y: newPos.y + (Math.random() - 0.5) * 20,
            vx: -dx * 0.1 + (Math.random() - 0.5) * 2,
            vy: -dy * 0.1 + (Math.random() - 0.5) * 2,
            life: 1,
            size: Math.random() * 4 + 2,
          });
        }
        
        setParticles(prev => [...prev, ...newParticles].slice(-30));
      }

      lastPosRef.current = newPos;

      // Reset moving state after delay
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Animate and decay particles
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.1,
            life: p.life - 0.03,
          }))
          .filter(p => p.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles.length > 0]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        className="absolute rounded-full blur-3xl"
        animate={{
          x: mousePos.x - 150,
          y: mousePos.y - 150,
          opacity: isMoving ? 0.08 : 0.04,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
        }}
      />

      {/* Core cursor dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-primary"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isMoving ? 1.2 : 1,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 500 }}
        style={{
          boxShadow: "0 0 12px hsl(var(--primary)), 0 0 24px hsl(var(--primary) / 0.5)",
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-primary/30"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isMoving ? 1.5 : 1,
          opacity: isMoving ? 0.6 : 0.3,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 150 }}
      />

      {/* Trailing particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: particle.life, scale: particle.life * 0.8 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute rounded-full bg-primary"
            style={{
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
              width: particle.size,
              height: particle.size,
              boxShadow: `0 0 ${particle.size * 2}px hsl(var(--primary) / ${particle.life * 0.5})`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
