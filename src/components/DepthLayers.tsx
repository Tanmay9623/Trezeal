import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Creates parallax depth layers that move at different speeds
export const DepthLayers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Different layers move at different speeds for depth effect
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[3] overflow-hidden">
      {/* Layer 1 - Slowest (Background) */}
      <motion.div
        style={{ y: layer1Y }}
        className="absolute inset-0"
      >
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/3 rounded-full blur-[100px]" />
        <div className="absolute top-[60%] right-[15%] w-80 h-80 bg-blue-500/3 rounded-full blur-[100px]" />
      </motion.div>

      {/* Layer 2 - Medium speed */}
      <motion.div
        style={{ y: layer2Y }}
        className="absolute inset-0"
      >
        {/* Animated wireframe boxes */}
        <motion.div
          className="absolute top-[30%] left-[20%] w-32 h-32 md:w-48 md:h-48 opacity-10"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 border border-primary/30" />
          <div className="absolute inset-4 border border-primary/20" />
          <div className="absolute inset-8 border border-primary/10" />
        </motion.div>

        {/* Floating triangles */}
        <motion.div
          className="absolute top-[50%] right-[25%] w-24 h-24 md:w-40 md:h-40 opacity-10"
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Layer 3 - Fastest (Foreground) */}
      <motion.div
        style={{ y: layer3Y }}
        className="absolute inset-0"
      >
        {/* Particle trail effect */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${10 + i * 7}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* 3D perspective grid */}
        <div className="absolute inset-0 opacity-5 hidden md:block">
          <svg width="100%" height="100%" className="absolute inset-0">
            {/* Vertical perspective lines */}
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={`v-${i}`}
                x1={`${12.5 * i}%`}
                y1="0%"
                x2={`${50}%`}
                y2="100%"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.3"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Horizontal perspective lines */}
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0%"
                y1={`${16.6 * i}%`}
                x2="100%"
                y2={`${50}%`}
                stroke="white"
                strokeWidth="0.5"
                opacity="0.3"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>
        </div>
      </motion.div>

      {/* Radial gradient overlay for depth */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
