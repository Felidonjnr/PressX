import { motion } from "motion/react";

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />

      {/* Slow Moving Light Orbs */}
      <motion.div
        animate={{
          x: ["-10%", "10%", "-10%"],
          y: ["-10%", "10%", "-10%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]"
      />
      
      <motion.div
        animate={{
          x: ["10%", "-10%", "10%"],
          y: ["10%", "-10%", "10%"],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]"
      />

      {/* Floating Geometric Patterns */}
      <div className="absolute inset-0 opacity-[0.05]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              rotate: Math.random() * 360,
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0
            }}
            animate={{ 
              rotate: [0, 360],
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-64 h-64 border border-accent/20 rounded-sm"
            style={{
              borderWidth: '1px',
              borderStyle: 'dashed'
            }}
          />
        ))}
      </div>

      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-[0.02]" />
    </div>
  );
};
