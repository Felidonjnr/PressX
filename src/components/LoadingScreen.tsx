import { motion } from "motion/react";
import { Shield, Loader2 } from "lucide-react";

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Matrix-like effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-8 relative"
        >
          <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-ping" />
          <Shield size={48} className="text-accent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-white"
        >
          <h2 className="text-2xl font-display font-bold mb-2 tracking-widest uppercase text-white">
            Plus-Up Initializing...
          </h2>
          <div className="flex items-center justify-center gap-3 text-white/60 font-mono text-[10px] uppercase tracking-[0.4em]">
            <Loader2 size={12} className="animate-spin text-accent" />
            Connecting to the Plug
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-12 w-64 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-accent shadow-[0_0_15px_rgba(0,255,255,0.8)]"
          />
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-accent/20 rounded-tl-3xl" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-accent/20 rounded-br-3xl" />
    </motion.div>
  );
};
