import { motion } from "motion/react";
import { siteContent } from "../data/content";
import { AlertCircle, ArrowDown } from "lucide-react";

export const Problem = () => {
  const { problem } = siteContent;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              {problem.heading}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {problem.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-lg border border-white/5 bg-white/[0.02] flex gap-4 items-start group hover:border-accent/20 transition-colors"
              >
                <div className="mt-1 text-red-500/50 group-hover:text-red-500 transition-colors">
                  <AlertCircle size={20} />
                </div>
                <p className="text-lg text-white/70 leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <p className="text-xl font-display font-medium text-white/40 italic">
              {problem.closingLine}
            </p>
            <ArrowDown className="text-accent animate-bounce" size={24} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
