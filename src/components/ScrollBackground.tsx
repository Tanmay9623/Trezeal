import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ScrollBackground = () => {
  const { scrollYProgress } = useScroll();
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Divide page into sections and change background accordingly
      if (latest < 0.15) setCurrentSection(0);
      else if (latest < 0.3) setCurrentSection(1);
      else if (latest < 0.5) setCurrentSection(2);
      else if (latest < 0.7) setCurrentSection(3);
      else setCurrentSection(4);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const backgrounds = [
    'linear-gradient(135deg, hsl(0 0% 0%) 0%, hsl(0 0% 5%) 100%)',
    'linear-gradient(135deg, hsl(0 0% 0%) 0%, hsl(0 0% 8%) 50%, hsl(0 0% 0%) 100%)',
    'linear-gradient(135deg, hsl(0 0% 0%) 0%, hsl(0 0% 6%) 100%)',
    'linear-gradient(135deg, hsl(0 0% 0%) 0%, hsl(0 0% 10%) 50%, hsl(0 0% 0%) 100%)',
    'linear-gradient(135deg, hsl(0 0% 0%) 0%, hsl(0 0% 4%) 100%)',
  ];

  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);
  const opacity5 = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [360, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Animated gradient backgrounds */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          background: backgrounds[0],
          opacity: opacity1,
          scale,
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ 
          background: backgrounds[1],
          opacity: opacity2,
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ 
          background: backgrounds[2],
          opacity: opacity3,
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ 
          background: backgrounds[3],
          opacity: opacity4,
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ 
          background: backgrounds[4],
          opacity: opacity5,
        }}
      />

      {/* Animated geometric lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
        <motion.line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="white"
          strokeWidth="1"
          style={{
            pathLength: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 0]),
          }}
        />
        <motion.line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          stroke="white"
          strokeWidth="1"
          style={{
            pathLength: useTransform(scrollYProgress, [0.2, 0.5], [0, 1]),
            opacity: useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0]),
          }}
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r="30%"
          stroke="white"
          strokeWidth="1"
          fill="none"
          style={{
            pathLength: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.3, 0]),
          }}
        />
      </svg>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-[10%] left-[10%] w-32 h-32 border border-white/20"
        style={{
          rotate: rotate,
          y: useTransform(scrollYProgress, [0, 1], [0, 400]),
          opacity: useTransform(scrollYProgress, [0, 0.3], [0.3, 0]),
        }}
      />
      
      <motion.div
        className="absolute top-[20%] right-[15%] w-24 h-24 border border-white/20 rounded-full"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]),
          y: useTransform(scrollYProgress, [0, 1], [0, -300]),
          opacity: useTransform(scrollYProgress, [0, 0.2, 0.5], [0.2, 0.4, 0]),
        }}
      />

      <motion.div
        className="absolute bottom-[30%] left-[20%] w-40 h-40 border border-white/10"
        style={{
          rotate: rotateReverse,
          x: useTransform(scrollYProgress, [0.3, 1], [0, 300]),
          opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 0.3, 0]),
        }}
      />

      <motion.div
        className="absolute top-[60%] right-[25%] w-20 h-20 border border-white/20 rotate-45"
        style={{
          scale: useTransform(scrollYProgress, [0.4, 0.7], [0.5, 1.5]),
          rotate: useTransform(scrollYProgress, [0.4, 1], [45, 405]),
          opacity: useTransform(scrollYProgress, [0.4, 0.6, 0.9], [0, 0.4, 0]),
        }}
      />

      {/* Particle grid that morphs */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${Math.floor(i / 4) * 20}%`,
              scale: useTransform(
                scrollYProgress,
                [i * 0.05, i * 0.05 + 0.1],
                [0, 1]
              ),
              y: useTransform(scrollYProgress, [0, 1], [0, (i % 2 === 0 ? 1 : -1) * 200]),
              opacity: useTransform(
                scrollYProgress,
                [i * 0.05, i * 0.05 + 0.1, i * 0.05 + 0.3],
                [0, 0.6, 0]
              ),
            }}
          />
        ))}
      </div>

      {/* Floating orbs that move with scroll */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(0 0% 100% / 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          y: useTransform(scrollYProgress, [0, 1], [0, -300]),
          x: useTransform(scrollYProgress, [0, 1], [0, 100]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]),
          rotate,
        }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(0 0% 100% / 0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
          x: useTransform(scrollYProgress, [0, 1], [0, -50]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1]),
        }}
      />
      <motion.div
        className="absolute top-[50%] left-[50%] w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(0 0% 100% / 0.05) 0%, transparent 70%)',
          filter: 'blur(70px)',
          y: useTransform(scrollYProgress, [0, 1], [-150, 150]),
          x: useTransform(scrollYProgress, [0, 1], [-150, 150]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1.3]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, -360]),
        }}
      />

      {/* Dot grid pattern that moves */}
      <motion.div
        className="absolute inset-0 bg-dots opacity-30"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 100]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.15, 0.1, 0]),
        }}
      />

      {/* Horizontal scrolling lines */}
      <motion.div
        className="absolute top-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        style={{
          scaleX: useTransform(scrollYProgress, [0.1, 0.3], [0, 1]),
          opacity: useTransform(scrollYProgress, [0.1, 0.25, 0.4], [0, 1, 0]),
        }}
      />
      <motion.div
        className="absolute top-[50%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        style={{
          scaleX: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
          opacity: useTransform(scrollYProgress, [0.4, 0.55, 0.7], [0, 1, 0]),
        }}
      />
      <motion.div
        className="absolute top-[75%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        style={{
          scaleX: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]),
          opacity: useTransform(scrollYProgress, [0.7, 0.85, 1], [0, 1, 0]),
        }}
      />

      {/* Corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/20"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
          opacity: useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0.4, 0]),
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/20"
        style={{
          scale: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
          opacity: useTransform(scrollYProgress, [0.8, 0.9], [0, 0.4]),
        }}
      />
    </div>
  );
};
