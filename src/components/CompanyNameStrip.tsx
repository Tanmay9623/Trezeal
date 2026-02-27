import { motion } from "framer-motion";

export const CompanyNameStrip = () => {
  const companies = [
    { name: "TechCorp", industry: "Technology" },
    { name: "GlobalBank", industry: "Finance" },
    { name: "RetailMax", industry: "Retail" },
    { name: "HealthPlus", industry: "Healthcare" },
    { name: "AutoDrive", industry: "Automotive" },
    { name: "EnergyFlow", industry: "Energy" },
    { name: "MediaHub", industry: "Media" },
    { name: "LogiTrans", industry: "Logistics" },
  ];

  const headerText = "Trusted by industry leaders worldwide";
  
  // Create repeating pattern: header, then all companies
  const createPattern = () => {
    const pattern = [{ name: headerText, industry: "" }];
    return [...pattern, ...companies];
  };

  const repeatedPattern = Array(10).fill(createPattern()).flat();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* First row - moving right */}
      <div className="absolute top-1/4 left-0 w-full opacity-8">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -5000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {repeatedPattern.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col px-6 md:px-10">
                <span className="text-[4rem] md:text-[7rem] lg:text-[9rem] font-display font-bold text-white/5">
                  {item.name}
                </span>
                {item.industry && (
                  <span className="text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] font-light text-white/4 -mt-2 md:-mt-4">
                    {item.industry}
                  </span>
                )}
              </div>
              <span className="text-[3rem] md:text-[5rem] lg:text-[6rem] text-white/5 mx-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second row - moving left (opposite direction) */}
      <div className="absolute top-1/2 left-0 w-full opacity-6">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [-5000, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 55,
              ease: "linear",
            },
          }}
        >
          {repeatedPattern.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col px-6 md:px-10">
                <span className="text-[5rem] md:text-[9rem] lg:text-[11rem] font-display font-bold text-white/4">
                  {item.name}
                </span>
                {item.industry && (
                  <span className="text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-light text-white/3 -mt-2 md:-mt-4">
                    {item.industry}
                  </span>
                )}
              </div>
              <span className="text-[4rem] md:text-[7rem] lg:text-[8rem] text-white/4 mx-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Third row - moving right */}
      <div className="absolute top-3/4 left-0 w-full opacity-7">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -5000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          {repeatedPattern.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col px-6 md:px-10">
                <span className="text-[3.5rem] md:text-[6.5rem] lg:text-[8.5rem] font-display font-bold text-white/5">
                  {item.name}
                </span>
                {item.industry && (
                  <span className="text-[1.8rem] md:text-[3rem] lg:text-[4rem] font-light text-white/4 -mt-2 md:-mt-3">
                    {item.industry}
                  </span>
                )}
              </div>
              <span className="text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] text-white/5 mx-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
