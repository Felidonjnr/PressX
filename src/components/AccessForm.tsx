import { motion } from "motion/react";
import { siteContent } from "../data/content";
import { Send, ShieldCheck, Zap, Users } from "lucide-react";

export const AccessForm = () => {
  const { form } = siteContent;

  return (
    <section id="request-form" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold mb-8 uppercase tracking-widest"
            >
              <Users size={14} />
              Limited Onboarding Active
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight text-white">
              {form.heading}
            </h2>
            
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              We don't do regular forms. To maintain the quality of our plug, we onboard everyone through our private Telegram channel. Join the waiting room to get started.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
              {[
                { icon: ShieldCheck, title: "Verified Access", desc: "Every member is manually reviewed." },
                { icon: Zap, title: "Instant Updates", desc: "Get notified the moment slots open." },
                { icon: Send, title: "Direct Support", desc: "Chat directly with the technical team." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <item.icon className="text-accent mb-4" size={24} />
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-6">
              <motion.a
                href={form.telegramGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,112,243,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-12 py-6 bg-accent text-white font-black rounded-sm flex items-center justify-center gap-3 group transition-all relative overflow-hidden"
              >
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="uppercase tracking-widest">{form.submitButton}</span>
              </motion.a>
              
              <p className="text-white/30 font-mono text-[10px] uppercase tracking-[0.2em]">
                {form.microText}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
