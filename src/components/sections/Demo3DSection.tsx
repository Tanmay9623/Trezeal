import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card3D, ScrollReveal } from '@/components/ScrollReveal';
import { ParallaxLayer } from '@/components/3DScrollContainer';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Rocket } from 'lucide-react';

/**
 * Demo section showcasing all 3D features
 * Use this as a reference for implementing 3D effects in your own sections
 */
export const Demo3DSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
        style={{ y, scale }}
      />
      
      <div className="container-max">
        {/* Section Title with Parallax */}
        <ParallaxLayer speed={0.2}>
          <ScrollReveal direction="down">
            <div className="text-center mb-16">
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="inline w-4 h-4 mr-2" />
                3D Features Demo
              </motion.span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Experience the <span className="gradient-text">Third Dimension</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hover over cards, scroll through sections, and watch as elements come alive with depth
              </p>
            </div>
          </ScrollReveal>
        </ParallaxLayer>

        {/* 3D Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Sparkles,
              title: "Parallax Layers",
              description: "Elements move at different speeds creating depth perception",
              color: "text-blue-500"
            },
            {
              icon: Zap,
              title: "Interactive 3D",
              description: "Cards respond to mouse movement with realistic 3D transforms",
              color: "text-yellow-500"
            },
            {
              icon: Rocket,
              title: "Scroll Animations",
              description: "Smooth transitions and reveals as you explore the page",
              color: "text-purple-500"
            }
          ].map((feature, index) => (
            <ScrollReveal 
              key={feature.title} 
              direction={index === 0 ? 'left' : index === 1 ? 'up' : 'right'}
              delay={index * 0.1}
            >
              <Card3D intensity={1.2}>
                <motion.div 
                  className="glass-card h-full"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color} mb-4`} />
                  <h3 className="font-display text-xl font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {feature.description}
                  </p>
                  <Button variant="ghost" size="sm" className="group">
                    Learn More
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        {/* Floating Elements Demo */}
        <ParallaxLayer speed={0.6}>
          <ScrollReveal direction="up">
            <div className="relative">
              <motion.div
                className="glass-card p-12 text-center relative overflow-hidden"
                style={{ rotateX, transformStyle: 'preserve-3d' }}
              >
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 bg-grid opacity-10"
                  animate={{ 
                    backgroundPosition: ['0px 0px', '60px 60px'],
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: 'linear' 
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    animate={{ 
                      rotateY: [0, 360],
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity, 
                      ease: 'linear' 
                    }}
                    className="inline-block mb-4"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-cyan-400 rounded-2xl flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  
                  <h3 className="font-display text-2xl font-bold mb-4">
                    Continuous 3D Animations
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Elements can have persistent 3D animations that respond to scroll position
                  </p>
                  
                  <div className="flex gap-4 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotateZ: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg">
                        Get Started
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotateZ: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" variant="outline">
                        View Docs
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </ParallaxLayer>

        {/* Stats with 3D effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '100%', label: '3D Enabled' },
            { value: '60fps', label: 'Smooth Animations' },
            { value: '∞', label: 'Possibilities' },
            { value: '🚀', label: 'Performance' },
          ].map((stat, index) => (
            <ParallaxLayer key={stat.label} speed={0.3 + index * 0.1}>
              <ScrollReveal direction="up" delay={index * 0.05}>
                <Card3D>
                  <motion.div 
                    className="glass-card text-center"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}
                  >
                    <motion.div 
                      className="font-display text-3xl font-bold text-primary mb-2"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                </Card3D>
              </ScrollReveal>
            </ParallaxLayer>
          ))}
        </div>
      </div>
    </section>
  );
};
