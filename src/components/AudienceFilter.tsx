import { motion } from "motion/react";
import { siteContent } from "../data/content";
import { Check, X } from "lucide-react";

export const AudienceFilter = () => {
  const { audience } = siteContent;

  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {audience.heading}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* This is for */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl border border-accent/20 bg-accent/[0.03] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Check size={80} className="text-accent" />
            </div>
            <h3 className="text-2xl font-display font-bold text-accent mb-8 flex items-center gap-3">
              <Check size={24} />
              This is for
            </h3>
            <ul className="space-y-6">
              {audience.isFor.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* This is not for */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl border border-white/5 bg-white/[0.01] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <X size={80} className="text-white" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white/40 mb-8 flex items-center gap-3">
              <X size={24} />
              This is not for
            </h3>
            <ul className="space-y-6">
              {audience.isNotFor.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-white/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
