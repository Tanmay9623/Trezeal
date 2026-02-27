import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const Cursor3D = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorSize = useMotionValue(20);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const cursorSizeSpring = useSpring(cursorSize, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => cursorSize.set(15);
    const handleMouseUp = () => cursorSize.set(20);
    
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        cursorSize.set(40);
      }
    };
    
    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        cursorSize.set(20);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add event listeners to all interactive elements
    document.querySelectorAll('button, a').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.querySelectorAll('button, a').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, cursorSize]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: cursorSizeSpring,
          height: cursorSizeSpring,
        }}
      >
        <div className="w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white" />
      </motion.div>
      
      {/* Trailing effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div 
          className="w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </>
  );
};
