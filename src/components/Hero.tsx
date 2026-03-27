import { motion } from "motion/react";
import { siteContent } from "../data/content";
import { ChevronRight, Shield, Cpu, Activity, Terminal, Lock } from "lucide-react";

export const Hero = () => {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Floating Code Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110%", x: `${Math.random() * 100}%` }}
            animate={{ y: "-10%" }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute text-[10px] font-mono text-accent/40 whitespace-nowrap"
          >
            {`0x${Math.random().toString(16).slice(2, 10)} >> ${Math.random() > 0.5 ? 'ALLOW' : 'DENY'}`}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] font-bold mb-8 tracking-[0.3em] uppercase backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Secure Environment Initialized
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
              {hero.headline}
            </h1>
            
            <p className="text-lg md:text-xl text-white/50 max-w-xl mb-12 leading-relaxed font-light">
              {hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-accent text-background font-black rounded-sm flex items-center gap-3 group transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <span className="relative z-10 uppercase tracking-widest">{hero.primaryCta}</span>
                <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <div className="flex items-center gap-4 text-white/30 font-mono text-xs uppercase tracking-[0.2em]">
                <div className="w-8 h-[1px] bg-white/10" />
                {hero.microText}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block relative perspective-2000"
          >
            {/* High-End Hacker Visual */}
            <div className="relative group">
              {/* Glow Backdrops */}
              <div className="absolute -inset-10 bg-accent/20 blur-[100px] rounded-full opacity-30 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-accent/50 via-blue-500/30 to-purple-500/50 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000" />
              
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotateX: [2, -2, 2],
                  rotateY: [-3, 3, -3]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#050505] shadow-2xl shadow-accent/20">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                    alt="High-end Technical Interface"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Overlay Scanline Effect */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-20 opacity-30" />
                  
                  {/* Animated Data Stream */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-30">
                    <motion.div 
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="w-full h-20 bg-gradient-to-b from-transparent via-accent/10 to-transparent opacity-50"
                    />
                  </div>
                </div>

                {/* Floating UI Elements */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -left-12 glass p-5 rounded-xl border-white/10 backdrop-blur-2xl w-48 z-40"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                      <Terminal size={16} />
                    </div>
                    <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest leading-none">
                      Terminal<br/><span className="text-accent">Active</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["0%", "80%", "40%", "90%"] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="h-full bg-accent" 
                      />
                    </div>
                    <div className="h-1 w-2/3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["0%", "60%", "30%", "70%"] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        className="h-full bg-blue-500" 
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-12 -right-12 glass p-5 rounded-xl border-white/10 backdrop-blur-2xl w-56 z-40"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                      <Lock size={16} />
                    </div>
                    <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                      Encryption<br/><span className="text-blue-400">AES-256</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {[...Array(8)].map((_, i) => (
                      <motion.div 
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="h-1 bg-blue-500/30 rounded-full" 
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute -top-16 -right-16 w-48 h-48 border-t border-r border-accent/10 rounded-tr-[4rem] pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 border-b border-l border-accent/10 rounded-bl-[4rem] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
