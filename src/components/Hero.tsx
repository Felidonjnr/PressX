import { motion } from "motion/react";
import { siteContent } from "../data/content";
import { ChevronRight, Shield, Cpu, Activity } from "lucide-react";

export const Hero = () => {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-screen flex items-center pt-728 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium mb-6 tracking-wider uppercase"
            >
              <Shield size={14} />
              System Status: Operational
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              {hero.headline}
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              {hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-accent text-background font-bold rounded-sm flex items-center gap-2 group transition-all"
              >
                {hero.primaryCta}
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <span className="text-sm text-white/40 font-mono italic">
                {hero.microText}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mt-12 lg:mt-0"
          >
            {/* 3D Hacker Image */}
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-20 animate-pulse" />
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateY: [-5, 5, -5],
                rotateX: [2, -2, 2]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="relative z-10 perspective-1000"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl shadow-accent/40">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                    alt="3D Hacker with Laptop"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                  />
                  
                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div 
                      animate={{ y: ["0%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-full h-[2px] bg-accent/30 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Dashboard Overlay */}
              <div className="absolute -bottom-8 -right-8 glass p-6 rounded-lg border-white/10 w-72 hidden md:block backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                    System Monitor
                  </div>
                  <Activity size={12} className="text-accent animate-pulse" />
                </div>
                <div className="space-y-3">
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-accent" />
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-blue-500" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-accent/20 rounded-tr-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-2 border-l-2 border-accent/20 rounded-bl-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
