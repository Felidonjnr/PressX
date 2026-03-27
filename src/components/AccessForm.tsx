import { motion } from "motion/react";
import { siteContent } from "../data/content";
import { Send, Shield } from "lucide-react";

export const AccessForm = () => {
  const { form } = siteContent;

  return (
    <section id="request-form" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden text-center"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
            
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8 text-accent">
              <Shield size={40} />
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Controlled Access Only
            </h2>
            
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Access to the support system is managed exclusively through our private Telegram channel. 
              Join the group below to request onboarding and receive technical updates.
            </p>

            <motion.a
              href={form.telegramGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#229ED9] text-white rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(34,158,217,0.5)]"
            >
              <Send size={20} />
              {form.telegramGroupText}
            </motion.a>

            <p className="mt-10 text-[10px] text-white/30 font-mono uppercase tracking-[0.3em]">
              {form.microText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
