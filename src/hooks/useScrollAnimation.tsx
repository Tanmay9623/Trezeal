import { useEffect, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const useScrollAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return {
    scrollY,
    scrollProgress,
    scrollYProgress,
  };
};

export const use3DScrollEffect = (elementRef: React.RefObject<HTMLElement>) => {
  const [is3DActive, setIs3DActive] = useState(false);
  const { scrollY } = useScroll();

  const rotateX = useTransform(scrollY, [0, 1000], [0, 15]);
  const rotateY = useTransform(scrollY, [0, 1000], [0, -10]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      setIs3DActive(isInView);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementRef]);

  return {
    rotateX,
    rotateY,
    scale,
    is3DActive,
  };
};
