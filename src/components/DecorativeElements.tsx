import { motion } from 'framer-motion';

export const DecorativeElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Animated corner brackets */}
      <motion.div
        className="absolute top-20 left-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 20V0H20" stroke="white" strokeWidth="1" />
          <path d="M0 20V0H20" stroke="white" strokeWidth="1" transform="translate(40, 40) rotate(180)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-20 right-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M40 0H60V20" stroke="white" strokeWidth="1" />
          <path d="M40 0H60V20" stroke="white" strokeWidth="1" transform="translate(20, 60) rotate(180)" />
        </svg>
      </motion.div>

      {/* Floating text decoration */}
      <motion.div
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white/10 font-display text-9xl font-bold select-none"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        DESIGN
      </motion.div>

      <motion.div
        className="absolute right-5 top-1/3 text-white/10 font-display text-9xl font-bold select-none"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        SCROLL
      </motion.div>

      {/* Animated grid boxes */}
      <div className="absolute top-1/4 left-1/4">
        <motion.div
          className="w-24 h-24 border border-white/20 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute inset-2 border border-white/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 right-1/3">
        <motion.div
          className="w-20 h-20 border border-white/20"
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1, 1.2, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Thin lines that appear and disappear */}
      <motion.div
        className="absolute top-0 left-1/3 w-px h-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-px h-1/3 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="absolute bottom-0 left-2/3 w-px h-1/4 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        animate={{ scaleY: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Cross patterns */}
      <motion.div
        className="absolute top-1/3 right-1/2"
        animate={{ rotate: 360, scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="0.5" opacity="0.2" />
          <line x1="0" y1="20" x2="40" y2="20" stroke="white" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/2"
        animate={{ rotate: -360, scale: [1, 1.4, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <line x1="15" y1="0" x2="15" y2="30" stroke="white" strokeWidth="0.5" opacity="0.2" />
          <line x1="0" y1="15" x2="30" y2="15" stroke="white" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </motion.div>

      {/* Circular orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-32 h-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-full h-full">
            <motion.div 
              className="absolute top-0 left-1/2 w-2 h-2 bg-white/30 rounded-full -translate-x-1/2"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Percentage labels */}
      <motion.div
        className="absolute bottom-10 left-10 text-white/5 font-display text-8xl font-bold select-none"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        100%
      </motion.div>

      {/* Tech-style corner markers */}
      <div className="absolute top-1/2 left-0 w-20 h-px bg-gradient-to-r from-white/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-20 h-px bg-gradient-to-l from-white/20 to-transparent" />
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};
