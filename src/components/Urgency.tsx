import { motion } from "motion/react";
import { siteContent } from "../data/content";
import { AlertTriangle } from "lucide-react";

export const Urgency = () => {
  const { urgency } = siteContent;

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl border border-accent/30 bg-accent/[0.02] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <AlertTriangle size={32} />
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-accent">
                {urgency.heading}
              </h2>
              <div className="space-y-2">
                {urgency.body.map((text, i) => (
                  <p key={i} className="text-lg text-white/70">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
