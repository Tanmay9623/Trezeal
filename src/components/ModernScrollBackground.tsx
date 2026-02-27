import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const ModernScrollBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Subtle mouse-following glow — uses primary colour so it works in both modes */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary)/0.04) 0%, transparent 50%)`,
          y: backgroundY,
          opacity,
        }}
      />

      {/* Grid pattern — uses CSS variable so it is visible in both modes */}
      <motion.div
        className="absolute inset-0 bg-grid opacity-[0.07] md:opacity-[0.12]"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
      />

      {/* Floating orbs — use primary/accent colours */}
      <motion.div
        className="absolute w-48 h-48 md:w-96 md:h-96 rounded-full bg-primary/[0.04]"
        style={{
          left: "20%",
          top: "20%",
          x: useTransform(scrollYProgress, [0, 1], [0, 200]),
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-40 h-40 md:w-80 md:h-80 rounded-full bg-primary/[0.03]"
        style={{
          right: "15%",
          top: "40%",
          x: useTransform(scrollYProgress, [0, 1], [0, -150]),
          y: useTransform(scrollYProgress, [0, 1], [0, 150]),
        }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full bg-blue-500/[0.03]"
        style={{
          left: "60%",
          bottom: "20%",
          x: useTransform(scrollYProgress, [0, 1], [0, 100]),
          y: useTransform(scrollYProgress, [0, 1], [0, -200]),
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vertical accent lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute h-full w-px bg-gradient-to-b from-transparent via-foreground/[0.06] to-transparent ${i > 2 ? "hidden md:block" : ""
            }`}
          style={{
            left: `${20 + i * 15}%`,
            y: useTransform(scrollYProgress, [0, 1], [0, 100 * (i + 1)]),
          }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      {/* Horizontal scan line */}
      <motion.div
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
        animate={{ y: [0, typeof window !== "undefined" ? window.innerHeight : 800] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};
