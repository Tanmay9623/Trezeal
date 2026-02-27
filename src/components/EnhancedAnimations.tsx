import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const EnhancedAnimations = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Animated rings */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/5"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 rounded-full border border-white/5"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Pulsing dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 md:w-3 md:h-3 bg-white/20 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Diagonal lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-px h-32 md:h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent"
          style={{
            left: `${15 + i * 15}%`,
            top: 0,
            transformOrigin: "top",
          }}
          animate={{
            scaleY: [0, 1, 0],
            y: [0, 200, 400],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Mouse follower with delay */}
      <motion.div
        className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePos.x - 128,
          y: mousePos.y - 128,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Animated border frames */}
      <motion.div
        className="absolute top-10 left-10 md:top-20 md:left-20 w-24 h-24 md:w-40 md:h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/30 to-white/0"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/0 via-white/30 to-white/0"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-24 h-24 md:w-40 md:h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      >
        <motion.div
          className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-white/0 via-white/30 to-white/0"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-white/0 via-white/30 to-white/0"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>

      {/* Tech-style corner brackets */}
      {[
        { top: "10%", left: "5%", rotate: 0 },
        { top: "10%", right: "5%", rotate: 90 },
        { bottom: "10%", left: "5%", rotate: -90 },
        { bottom: "10%", right: "5%", rotate: 180 },
      ].map((pos, i) => (
        <motion.div
          key={`bracket-${i}`}
          className="absolute w-8 h-8 md:w-12 md:h-12"
          style={{ ...pos }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <div 
            className="w-full h-full border-l-2 border-t-2 border-white/20"
            style={{ transform: `rotate(${pos.rotate}deg)` }}
          />
        </motion.div>
      ))}

      {/* Data stream effect */}
      <div className="absolute right-4 md:right-10 top-1/4 h-96 opacity-30">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="w-px bg-white/20 ml-2"
            style={{ height: "100%" }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
};
