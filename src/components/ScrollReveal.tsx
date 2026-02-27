import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionOffset = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
  };

  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: offset.y,
        x: offset.x,
        z: -30,
        rotateX: direction === 'up' ? 15 : direction === 'down' ? -15 : 0,
        rotateY: direction === 'left' ? -15 : direction === 'right' ? 15 : 0,
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        x: 0,
        z: 0,
        rotateX: 0,
        rotateY: 0,
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
};

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export const Card3D = ({ children, className = '', intensity = 1 }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10 * intensity;
      const rotateY = ((x - centerX) / centerX) * 10 * intensity;

      card.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(20px)
        scale(1.02)
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = `
        perspective(1000px) 
        rotateX(0deg) 
        rotateY(0deg) 
        translateZ(0px)
        scale(1)
      `;
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-200 ease-out ${className}`}
      style={{ 
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
