import { motion } from "framer-motion";

// Advanced artistic overlay effects for Hero section — theme-aware (no hardcoded white/black)
export const ArtisticHeroOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden text-foreground">
      {/* Artistic rotating shape */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 opacity-10"
        animate={{ rotate: [0, 360], scale: [1, 1.3, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100,20 Q150,40 160,80 T180,120 Q160,150 120,160 T80,180 Q40,160 20,120 T40,80 Q60,40 100,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.5"
          />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        </svg>
      </motion.div>

      {/* Liquid morphing shape */}
      <motion.div
        className="absolute bottom-40 left-40 w-64 h-64 opacity-5 bg-foreground"
        animate={{
          rotate: [0, -360],
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "60% 40% 30% 70% / 50% 60% 40% 50%",
            "40% 60% 70% 30% / 40% 50% 60% 50%",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Wireframe cube */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-32 h-32 hidden lg:block"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border border-foreground/10" style={{ transform: "translateZ(32px)" }} />
        <div className="absolute inset-0 border border-foreground/10" style={{ transform: "translateZ(-32px)" }} />
        <div className="absolute inset-0 border border-foreground/10" style={{ transform: "rotateY(90deg) translateZ(32px)" }} />
        <div className="absolute inset-0 border border-foreground/10" style={{ transform: "rotateY(90deg) translateZ(-32px)" }} />
        <div className="absolute inset-0 border border-foreground/10" style={{ transform: "rotateX(90deg) translateZ(32px)" }} />
        <div className="absolute inset-0 border border-foreground/10" style={{ transform: "rotateX(90deg) translateZ(-32px)" }} />
      </motion.div>

      {/* Spiral particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-foreground/20 rounded-full"
            style={{ left: "50%", top: "40%" }}
            animate={{
              x: [0, Math.cos(angle) * 100, Math.cos(angle) * 200],
              y: [0, Math.sin(angle) * 100, Math.sin(angle) * 200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.2, ease: "easeOut" }}
          />
        );
      })}

      {/* Abstract SVG lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${10 + i * 10}%`}
            y1="0%"
            x2={`${90 - i * 10}%`}
            y2="100%"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* Hexagon grid */}
      <div className="absolute inset-0 opacity-[0.04] hidden md:block">
        <svg width="100%" height="100%">
          {[...Array(5)].map((_, row) =>
            [...Array(8)].map((_, col) => {
              const x = col * 100 + (row % 2) * 50;
              const y = row * 80;
              return (
                <motion.polygon
                  key={`${row}-${col}`}
                  points={`${x},${y + 20} ${x + 25},${y} ${x + 50},${y + 20} ${x + 50},${y + 60} ${x + 25},${y + 80} ${x},${y + 60}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, delay: (row + col) * 0.1, ease: "easeInOut" }}
                />
              );
            })
          )}
        </svg>
      </div>

      {/* Brush stroke sweep line */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-px origin-left bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
        animate={{ scaleX: [0, 1, 0], x: ["-100%", "0%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
      />

      {/* Pulsing rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/8"
          initial={{ width: 0, height: 0, opacity: 0.8 }}
          animate={{ width: [0, 300, 600], height: [0, 300, 600], opacity: [0.6, 0.3, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }}
        />
      ))}

      {/* Decorative text fragments */}
      <motion.div
        className="absolute top-1/4 right-10 text-8xl font-black text-foreground/[0.03] select-none hidden lg:block"
        animate={{ rotateZ: [0, 10, -10, 0], x: [0, 20, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        CODE
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-10 text-7xl font-black text-foreground/[0.03] select-none hidden lg:block"
        animate={{ rotateZ: [0, -12, 12, 0], x: [0, -30, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        CREATE
      </motion.div>

      {/* Light rays */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute top-1/2 left-1/2 w-1 h-64 origin-bottom bg-gradient-to-t from-foreground/8 to-transparent"
          style={{ rotate: i * 60 }}
          animate={{ scaleY: [0, 1, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
        />
      ))}

      {/* Orbiting particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute top-1/2 left-1/2 w-3 h-3"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="w-3 h-3 bg-foreground/20 rounded-full"
            style={{ x: 100 + i * 20 }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ))}
    </div>
  );
};
