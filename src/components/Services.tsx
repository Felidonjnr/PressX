import { motion } from "motion/react";
import { siteContent } from "../data/content";
import { Terminal, FileText, Image, Settings, ArrowRight } from "lucide-react";

const icons = [Terminal, Image, Settings, FileText];

export const Services = () => {
  const { services } = siteContent;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
            {services.heading}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-xl border border-white/5 bg-white/[0.01] hover:border-accent/30 transition-all relative overflow-hidden glow-border-hover"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Icon size={120} className="text-accent" />
                </div>
                
                <div className="relative z-10">
                  <div className="mb-6 p-4 w-fit rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-all glow-border">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white/90 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent/80 font-mono text-xs uppercase tracking-wider mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-white/60 leading-relaxed mb-6 max-w-md">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent text-sm font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/40 font-mono text-sm uppercase tracking-[0.3em]"
        >
          {services.closingLine}
        </motion.p>
      </div>
    </section>
  );
};
