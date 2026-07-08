"use client";

import { useState } from "react";
import { Copy, Check, Send } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("luciferdarshan@proton.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate API delivery
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSending(false);
    setIsSent(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSent(false);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section id="contact" className="py-24 bg-jp-paper relative overflow-hidden">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 sm:gap-16">
          
          {/* Left Column: Headers & Info */}
          <div className="w-full lg:w-[35%] space-y-6 shrink-0">
            <motion.div variants={itemVariants} className="relative">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold font-sans text-jp-ink">
                  Contact <span className="text-brand-gradient">/</span>
                </h2>
              </div>
              <div className="thin-divider mt-4" />
            </motion.div>

            {/* Monospace Annotation */}
            <motion.div variants={itemVariants} className="text-[9px] font-mono tracking-widest text-jp-gray-dark uppercase">
              COMMUNICATION PORT // DIRECT WIRE
            </motion.div>

            <motion.p variants={itemVariants} className="font-sans text-xs sm:text-sm text-jp-gray-dark font-normal leading-relaxed">
              If you would like to reach out, discuss local-first architectures, or query me about LeoBook, send a message or use the coordinate links.
            </motion.p>

            {/* Direct details */}
            <motion.div variants={itemVariants} className="space-y-4 pt-2">
              {/* Email link */}
              <div className="flex items-center justify-between p-3 bg-jp-washi border border-jp-border rounded-xl text-xs select-none">
                <span className="font-mono text-jp-gray-dark text-[10px]">EMAIL</span>
                <div className="flex items-center gap-3 font-mono text-jp-ink font-medium">
                  <span className="select-all">luciferdarshan@proton.me</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 hover:bg-jp-sumi border border-transparent hover:border-jp-border rounded transition-colors text-jp-gray-dark hover:text-jp-red cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* GitHub Link */}
              <div className="flex items-center justify-between p-3 bg-jp-washi border border-jp-border rounded-xl text-xs select-none">
                <span className="font-mono text-jp-gray-dark text-[10px]">GITHUB</span>
                <a
                  href="https://github.com/luciferdarshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-jp-ink font-medium hover:text-jp-red transition-colors group cursor-pointer"
                >
                  luciferdarshan <GithubIcon className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Custom Underline Form */}
          <div className="w-full lg:w-[65%] relative">
            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 bg-jp-washi border border-jp-border rounded-xl relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Name field */}
                    <div className="flex flex-col gap-1">
                      <label className="font-mono text-[9px] text-jp-gray-dark uppercase tracking-wider">
                        NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full border-b border-jp-border bg-transparent focus:border-jp-red py-2 font-mono text-xs text-jp-ink outline-none transition-colors"
                        disabled={isSending}
                      />
                    </div>

                    {/* Email field */}
                    <div className="flex flex-col gap-1">
                      <label className="font-mono text-[9px] text-jp-gray-dark uppercase tracking-wider">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email coordinates"
                        className="w-full border-b border-jp-border bg-transparent focus:border-jp-red py-2 font-mono text-xs text-jp-ink outline-none transition-colors"
                        disabled={isSending}
                      />
                    </div>

                    {/* Message field */}
                    <div className="flex flex-col gap-1">
                      <label className="font-mono text-[9px] text-jp-gray-dark uppercase tracking-wider">
                        MESSAGE
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type message details..."
                        className="w-full border-b border-jp-border bg-transparent focus:border-jp-red py-2 font-mono text-xs text-jp-ink outline-none resize-none transition-colors"
                        disabled={isSending}
                      />
                    </div>

                    {/* Action Block */}
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-[8px] font-mono text-jp-gray-dark uppercase tracking-widest">
                        {isSending ? "STAMPING RECORD..." : "READY TO SHIP"}
                      </span>
                      
                      <button
                        type="submit"
                        disabled={isSending}
                        className="flex items-center gap-2 px-6 py-2.5 bg-jp-red hover:bg-jp-red-hover text-white font-mono text-xs tracking-wider transition-all duration-300 rounded-full cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
                      >
                        <Send className="w-3.5 h-3.5" /> SEND MESSAGE
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="sent-confirmation"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center relative select-none"
                  >
                    {/* Hanko Stamp Animation */}
                    <motion.div
                      initial={{ scale: 3, opacity: 0, rotate: -25 }}
                      animate={{ scale: 1, opacity: 0.95, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }}
                      className="w-20 h-20 border-2 border-dashed border-jp-red rounded-full flex flex-col items-center justify-center text-jp-red font-bold select-none relative mb-6"
                    >
                      <span className="text-xl leading-none">SENT</span>
                      <span className="text-[8px] font-mono tracking-widest mt-1">OK</span>
                    </motion.div>

                    <h3 className="text-lg font-bold text-jp-ink mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="text-xs font-mono text-jp-gray-dark max-w-sm mb-6 uppercase tracking-wider">
                      Your message record has been stamped and delivered to Leo Darshan.
                    </p>

                    <button
                      onClick={handleReset}
                      className="px-5 py-2 border border-jp-border hover:border-jp-red text-jp-gray-dark hover:text-jp-red font-mono text-[10px] tracking-wider transition-colors rounded-full cursor-pointer"
                    >
                      WRITE ANOTHER MESSAGE
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
