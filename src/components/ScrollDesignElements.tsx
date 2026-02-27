import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollDesignElements = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Animated hexagon grid */}
      <div className="absolute top-1/4 right-1/4 opacity-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.svg
            key={i}
            width="80"
            height="80"
            viewBox="0 0 100 100"
            className="absolute"
            style={{
              left: `${(i % 3) * 90}px`,
              top: `${Math.floor(i / 3) * 90}px`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 20 + i * 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </motion.svg>
        ))}
      </div>

      {/* Animated wireframe sphere */}
      <motion.div
        className="absolute top-1/3 left-10 w-40 h-40 opacity-10"
        animate={{
          rotateY: 360,
          rotateX: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative w-full h-full border border-white/40 rounded-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-white/30 rounded-full"
              style={{
                transform: `rotateY(${i * 45}deg)`,
                transformStyle: 'preserve-3d',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Flowing curves */}
      <svg className="absolute w-full h-full opacity-10" preserveAspectRatio="none">
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100"
          fill="none"
          stroke="white"
          strokeWidth="2"
          animate={{
            d: [
              "M0,100 Q250,50 500,100 T1000,100",
              "M0,100 Q250,150 500,100 T1000,100",
              "M0,100 Q250,50 500,100 T1000,100",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,200 Q200,150 400,200 T800,200"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          animate={{
            d: [
              "M0,200 Q200,150 400,200 T800,200",
              "M0,200 Q200,250 400,200 T800,200",
              "M0,200 Q200,150 400,200 T800,200",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>

      {/* Binary code rain */}
      <div className="absolute right-10 top-10 flex gap-4 opacity-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="flex flex-col gap-2 text-white text-xs font-mono"
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Concentric circles */}
      <motion.div
        className="absolute bottom-1/4 right-1/3"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/20 rounded-full"
            style={{
              width: `${(i + 1) * 40}px`,
              height: `${(i + 1) * 40}px`,
              left: `${-i * 20}px`,
              top: `${-i * 20}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Tech brackets */}
      <motion.div
        className="absolute top-1/2 left-1/3 opacity-20"
        animate={{
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
          <path d="M60 0L20 50L60 100" stroke="white" strokeWidth="2" />
          <path d="M50 10L15 50L50 90" stroke="white" strokeWidth="1" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/3 opacity-20"
        animate={{
          x: [10, -10, 10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="60" height="100" viewBox="0 0 60 100" fill="none">
          <path d="M0 0L40 50L0 100" stroke="white" strokeWidth="2" />
          <path d="M10 10L45 50L10 90" stroke="white" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Pulsing dots network */}
      <div className="absolute top-2/3 left-1/4 opacity-20">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          const radius = 60;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${50 + x}px`,
                top: `${50 + y}px`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            />
          );
        })}
        {/* Center dot */}
        <div className="absolute w-3 h-3 bg-white rounded-full left-[49px] top-[49px]" />
      </div>

      {/* Animated mesh grid */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 opacity-10"
        style={{
          rotateX: useTransform(scrollYProgress, [0, 1], [0, 360]),
          rotateY: useTransform(scrollYProgress, [0, 1], [0, -360]),
          transformStyle: 'preserve-3d',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          {Array.from({ length: 10 }).map((_, i) => (
            <g key={i}>
              <line
                x1={i * 10}
                y1="0"
                x2={i * 10}
                y2="100"
                stroke="white"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1={i * 10}
                x2="100"
                y2={i * 10}
                stroke="white"
                strokeWidth="0.5"
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Radial burst lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 h-px w-48 bg-white origin-left"
              style={{
                rotate: `${angle}deg`,
              }}
              animate={{
                scaleX: [0.5, 1, 0.5],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
