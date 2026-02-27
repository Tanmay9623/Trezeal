import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Floating 3D artistic elements for the page
export const Floating3DArt = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Large floating geometric shapes with 3D depth */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 opacity-10"
        style={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 30,
          rotateX: mousePosition.y * 20,
          rotateY: mousePosition.x * 20,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateZ: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-full h-full border-2 border-primary/30 rounded-lg backdrop-blur-sm" />
        <div className="absolute inset-4 border border-primary/20 rounded-lg" />
      </motion.div>

      {/* Floating diamond shape */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 md:w-40 md:h-40 opacity-10"
        style={{
          x: mousePosition.x * -40,
          y: mousePosition.y * -40,
          rotateX: mousePosition.y * -15,
          rotateY: mousePosition.x * -15,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateZ: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotateZ: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 95,50 50,95 5,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
          <polygon
            points="50,20 80,50 50,80 20,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/50"
          />
        </svg>
      </motion.div>

      {/* Hexagon cluster */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-20 h-20 md:w-32 md:h-32 opacity-10"
        style={{
          x: mousePosition.x * 25,
          y: mousePosition.y * 25,
          rotateX: mousePosition.y * 10,
          rotateY: mousePosition.x * 10,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateZ: [0, -360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 90,30 90,70 50,95 10,70 10,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
          <polygon
            points="50,20 80,37 80,63 50,80 20,63 20,37"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/50"
          />
        </svg>
      </motion.div>

      {/* Floating circles with depth */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary/20 backdrop-blur-sm"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
            x: mousePosition.x * (10 + i * 5),
            y: mousePosition.y * (10 + i * 5),
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated lines connecting dots */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <motion.line
          x1="20%"
          y1="20%"
          x2="80%"
          y2="80%"
          stroke="white"
          strokeWidth="1"
          animate={{
            x2: ["20%", "80%", "20%"],
            y2: ["80%", "20%", "80%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="80%"
          y1="20%"
          x2="20%"
          y2="80%"
          stroke="white"
          strokeWidth="1"
          animate={{
            x2: ["80%", "20%", "80%"],
            y2: ["80%", "20%", "80%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Concentric rotating circles */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-40 h-40 md:w-64 md:h-64 opacity-5"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-primary/30 rounded-full"
            style={{
              scale: 1 - i * 0.2,
            }}
            animate={{
              rotate: i % 2 === 0 ? -360 : 360,
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              rotate: { duration: 20 - i * 3, repeat: Infinity, ease: "linear" },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </motion.div>

      {/* Floating text fragments */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-6xl md:text-9xl font-black text-primary/5 select-none"
        style={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateZ: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        3D
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4 text-5xl md:text-8xl font-black text-primary/5 select-none"
        style={{
          x: mousePosition.x * -15,
          y: mousePosition.y * -15,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateZ: [0, -8, 0, 8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ART
      </motion.div>

      {/* Pulsing grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
