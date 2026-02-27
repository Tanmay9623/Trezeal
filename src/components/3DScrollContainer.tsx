import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollContainerProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export const ScrollContainer3D = ({ children, className = '', intensity = 1 }: ScrollContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * intensity, -100 * intensity]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -25]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15]);
  const blurValue = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [8, 0, 0, 8]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
        scale,
        rotateX,
        rotateY,
        filter,
        transformStyle: 'preserve-3d',
        transformPerspective: 1200,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxLayer = ({ 
  children, 
  speed = 0.5, 
  className = '' 
}: { 
  children: ReactNode; 
  speed?: number; 
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, speed * 10]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotateZ }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement = ({
  children,
  delay = 0,
  className = ''
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10],
        rotateZ: [-3, 3, -3],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
};
