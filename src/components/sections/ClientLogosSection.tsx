import { motion } from "framer-motion";

// Companies data with more visual emphasis
const companiesRow1 = [
  "TriragiNetworks", "Legal_wings", "Aivors", "Education", "Atkind", "SmartLook"
];

const companiesRow2 = [
  "InnovateLab", "QuantumSoft", "NexusGroup", "PrimeVentures",
  "FutureScale", "ApexSystems", "VectorDigital", "ZenithCorp"
];

const companiesRow3 = [
  "CloudNine", "DataStream", "BlockMatrix", "CyberGuard",
  "SwiftLogix", "BrightEdge", "CoreDynamics", "PulseTech"
];

// Marquee component for infinite scrolling
const MarqueeStrip = ({
  companies,
  direction = "left",
  speed = 50
}: {
  companies: string[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  // Duplicate companies array for seamless loop
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="relative overflow-hidden py-3 md:py-4">
      <motion.div
        className="flex gap-4 md:gap-6 lg:gap-8 whitespace-nowrap"
        animate={{
          x: direction === "left" ? [0, -100 * companies.length] : [-100 * companies.length, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedCompanies.map((company, index) => (
          <div
            key={`${company}-${index}`}
            className="relative group cursor-pointer"
          >
            {/* Artistic company name with ink-like styling */}
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black tracking-tight 
                           bg-gradient-to-br from-primary/20 via-primary/40 to-primary/20 
                           bg-clip-text text-transparent
                           group-hover:from-primary group-hover:via-primary/80 group-hover:to-primary
                           transition-all duration-500
                           [text-shadow:_0_0_20px_rgb(255_255_255_/_0.1)]
                           group-hover:[text-shadow:_0_0_30px_rgb(255_255_255_/_0.3)]
                           relative">
              {company}

              {/* Artistic ink splatter effect on hover */}
              <span className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />
            </span>

            {/* Decorative dot */}
            <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary/30 mx-4 md:mx-6 lg:mx-8 
                           group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const ClientLogosSection = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
      {/* Background artistic elements with 3D depth */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 3D floating particles */}
      <div className="absolute inset-0 hidden md:block">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header with artistic styling and 3D effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.p
            className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-[0.3em] mb-3"
            animate={{ z: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Our Growing Client Network
          </motion.p>
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <motion.div
              className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-primary/50"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotateZ: [0, 180, 360],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
            <motion.div
              className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-primary/50"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Single row of moving company strips */}
        <div>
          <MarqueeStrip companies={companiesRow1} direction="left" speed={40} />
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};
