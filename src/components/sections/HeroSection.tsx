import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ParallaxLayer } from "@/components/3DScrollContainer";
import { HeroBackground } from "@/components/HeroBackground";

const cyclingPhrases = [
  "Global Enterprises",
  "Digital Futures",
  "Industry Leaders",
  "Smarter Businesses",
  "Tomorrow's World",
];

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const [phraseIndex, setPhraseIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % cyclingPhrases.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentBlurValue = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0, 10]);
  const contentFilter = useMotionTemplate`blur(${contentBlurValue}px)`;

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden w-full">

      {/* ── Unique animated canvas background ─────────────────────────── */}
      <div className="absolute inset-0 z-0 bg-background">
        <HeroBackground />
        {/* Soft gradient accent blobs layered above canvas */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/6 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Animated corner brackets */}
      <motion.div
        className="absolute top-32 left-4 md:left-16 w-12 h-12 md:w-16 md:h-16 z-10"
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-full h-full border-l border-t border-foreground/20" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-4 md:right-16 w-12 h-12 md:w-16 md:h-16 z-10"
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      >
        <div className="w-full h-full border-r border-b border-foreground/20" />
      </motion.div>

      {/* ── Main content ──────────────────────────────────────────────── */}
      <motion.div
        className="container-max relative z-10"
        style={{ y: contentY, opacity: contentOpacity, filter: contentFilter }}
      >
        <div className="max-w-2xl">
          <ParallaxLayer speed={0.3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-foreground border border-border text-sm font-medium mb-6 backdrop-blur-sm">
                Enterprise Technology Solutions
              </span>
            </motion.div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.2}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Engineering Intelligence{" "}
              <br />
              <span className="inline-block relative overflow-visible" style={{ minHeight: "1.2em" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="gradient-text inline-block whitespace-nowrap"
                  >
                    {cyclingPhrases[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
          </ParallaxLayer>

          <ParallaxLayer speed={0.4}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed backdrop-blur-sm"
            >
              Delivering enterprise software, web development, industrial automation,
              and AI-driven business solutions for global corporations.
            </motion.p>
          </ParallaxLayer>

          <ParallaxLayer speed={0.5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="group backdrop-blur-sm relative overflow-hidden" onClick={() => window.location.href = "/services"}>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="backdrop-blur-sm"
                  onClick={() => window.location.href = "/contact"}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </ParallaxLayer>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 grid grid-cols-4 gap-2 sm:gap-4"
          >
            {[
              { value: "20+", label: "Projects" },
              { value: "20+", label: "Clients" },
              { value: "3+", label: "Industries" },
              { value: "100%", label: "Commitment" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card py-3 px-2 sm:py-4 sm:px-4 text-center bg-card text-card-foreground"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-display text-base sm:text-xl md:text-2xl font-bold text-foreground leading-tight">{stat.value}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating orbs (above canvas, below content) */}
      <motion.div
        className="absolute top-1/4 right-4 md:right-10 w-32 h-32 md:w-64 md:h-64 rounded-full bg-white/5 blur-3xl z-[1]"
        animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-4 md:left-10 w-24 h-24 md:w-48 md:h-48 rounded-full bg-gray-400/5 blur-3xl z-[1]"
        animate={{ y: [20, -20, 20], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Scroll-reveal vertical lines */}
      <motion.div
        className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent z-[1]"
        style={{
          scaleY: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
          opacity: useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 0])
        }}
      />
      <motion.div
        className="hidden md:block absolute right-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent z-[1]"
        style={{
          scaleY: useTransform(scrollYProgress, [0.1, 0.4], [0, 1]),
          opacity: useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 1, 0])
        }}
      />

      {/* Mobile pulse dots */}
      <motion.div
        className="md:hidden absolute top-1/3 left-8 w-2 h-2 bg-foreground/30 rounded-full z-[1]"
        animate={{ scale: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="md:hidden absolute top-2/3 right-8 w-2 h-2 bg-foreground/30 rounded-full z-[1]"
        animate={{ scale: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </section>
  );
};
