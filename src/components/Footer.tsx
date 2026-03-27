import { siteContent } from "../data/content";

export const Footer = () => {
  const { footer } = siteContent;

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent font-display font-bold">
              P
            </div>
            <span className="text-sm font-mono text-white/40 uppercase tracking-widest">
              {footer.text}
            </span>
          </div>
          
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            © {new Date().getFullYear()} Plus-Up Tech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
