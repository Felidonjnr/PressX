import { motion } from "motion/react";
import { siteContent } from "../data/content";
import { CheckCircle2, Layers } from "lucide-react";

export const Solution = () => {
  const { solution } = siteContent;

  return (
    <section className="py-24 bg-white/[0.01] relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-accent mb-6">
              <Layers size={24} />
              <span className="text-sm font-mono uppercase tracking-widest">The Solution</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              {solution.heading}
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              {solution.body}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {solution.capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg border border-accent/10 bg-accent/[0.02] hover:bg-accent/[0.05] transition-all group"
              >
                <CheckCircle2 className="text-accent mb-4 opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
                <h3 className="text-lg font-medium text-white/90">
                  {cap}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
