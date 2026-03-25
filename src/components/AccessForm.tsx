import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteContent } from "../data/content";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export const AccessForm = () => {
  const { form } = siteContent;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    supportType: form.dropdown.options[0]
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage("");
    
    try {
      await addDoc(collection(db, "access_requests"), {
        ...formData,
        status: "pending",
        createdAt: new Date().toISOString()
      });
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        telegram: '',
        supportType: form.dropdown.options[0]
      });
    } catch (error) {
      console.error("Error submitting request:", error);
      setStatus('error');
      setErrorMessage("Failed to submit request. Please try again later.");
    }
  };

  return (
    <section id="request-form" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              {form.heading}
            </h2>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">Request Sent</h3>
                  <p className="text-white/60 text-lg mb-8">
                    {form.successMessage}
                  </p>
                  
                  <motion.a
                    href={form.telegramGroupLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#229ED9] text-white rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(34,158,217,0.4)]"
                  >
                    <Send size={18} />
                    {form.telegramGroupText}
                  </motion.a>

                  <div className="mt-12">
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-accent hover:underline font-mono text-sm uppercase tracking-widest"
                    >
                      Send another request
                    </button>
                  </div>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                    <AlertCircle size={48} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">Submission Failed</h3>
                  <p className="text-white/60 text-lg mb-8">
                    {errorMessage}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-8 py-4 bg-white/10 text-white font-bold rounded-sm hover:bg-white/20 transition-all"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-white/40 uppercase tracking-widest">
                      {form.fields.name}
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono text-white/40 uppercase tracking-widest">
                      {form.fields.email}
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono text-white/40 uppercase tracking-widest">
                      {form.fields.telegram}
                    </label>
                    <input
                      type="text"
                      value={formData.telegram}
                      onChange={e => setFormData({...formData, telegram: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      placeholder="@username"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono text-white/40 uppercase tracking-widest">
                      {form.dropdown.label}
                    </label>
                    <select
                      value={formData.supportType}
                      onChange={e => setFormData({...formData, supportType: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none"
                    >
                      {form.dropdown.options.map(opt => (
                        <option key={opt} value={opt} className="bg-background text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      disabled={status === 'loading'}
                      type="submit"
                      className="w-full bg-accent text-background font-bold py-4 rounded-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : (
                        <>
                          {form.submitButton}
                          <Send size={18} />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-white/30 mt-4 font-mono uppercase tracking-widest">
                      {form.microText}
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
