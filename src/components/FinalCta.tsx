import { motion } from "motion/react";
import { siteContent } from "../data/content";
import { ChevronRight } from "lucide-react";

export const FinalCta = () => {
  const { finalCta } = siteContent;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/[0.02]" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-12 leading-relaxed">
            {finalCta.line}
          </h2>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-5 bg-white text-background font-bold rounded-sm flex items-center gap-2 mx-auto group transition-all"
          >
            {finalCta.button}
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
