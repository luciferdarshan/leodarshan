"use client";

import { useState } from "react";
import { Copy, Check, Send, Mail, MessageSquare } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 70, damping: 15 },
  },
};

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
    await new Promise((res) => setTimeout(res, 1500));
    setIsSending(false);
    setIsSent(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSent(false);
  };

  return (
    <section id="contact" className="py-28 bg-bg-void relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 data-grid-bg opacity-60 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/2 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-neon-cyan/2 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="section-label mb-4" style={{ color: "#00ff88" }}>
            <span className="inline-block w-5 h-px bg-neon-green mr-2" />
            COMMUNICATION PORT
            <span className="inline-block w-1 h-1 bg-neon-green rotate-45 ml-2" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-text-primary">
            GET IN <span className="text-neon-green" style={{ textShadow: "0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 40px rgba(0,255,136,0.5)" }}>TOUCH</span>
          </h2>
          <div className="neon-line mt-4 w-48 opacity-60" style={{ background: "linear-gradient(90deg, transparent, #00ff88, transparent)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-10">
          {/* Left: contact info */}
          <motion.div variants={itemVariants} className="space-y-5">
            <div className="font-mono text-xs text-text-dim tracking-widest uppercase mb-6">
              DIRECT CHANNELS
            </div>

            {/* Email */}
            <div className="anime-card p-4 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-sm bg-neon-cyan/5 border border-neon-cyan/20 flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-neon-cyan" />
                </div>
                <div>
                  <div className="font-mono text-xs text-text-dim tracking-widest">EMAIL</div>
                  <div className="font-sans text-sm text-text-primary font-medium">Primary Contact</div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-bg-void border border-border-subtle rounded-sm px-3 py-2">
                <span className="font-mono text-xs text-text-muted select-all">
                  luciferdarshan@proton.me
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="ml-2 p-1 hover:bg-bg-panel rounded-sm text-text-dim hover:text-neon-cyan transition-colors cursor-pointer"
                  title="Copy Email"
                  id="copy-email-btn"
                  aria-label="Copy email address"
                >
                  {copied
                    ? <Check className="w-3.5 h-3.5 text-neon-green" />
                    : <Copy className="w-3.5 h-3.5" />
                  }
                </button>
              </div>
              {copied && (
                <div className="mt-2 font-mono text-xs text-neon-green tracking-widest">
                  ✓ COPIED TO CLIPBOARD
                </div>
              )}
            </div>

            {/* GitHub */}
            <div className="anime-card p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-sm bg-neon-violet/5 border border-neon-violet/20 flex items-center justify-center">
                  <GithubIcon className="w-3.5 h-3.5 text-neon-violet" />
                </div>
                <div>
                  <div className="font-mono text-xs text-text-dim tracking-widest">GITHUB</div>
                  <div className="font-sans text-sm text-text-primary font-medium">Source Code</div>
                </div>
              </div>
              <a
                href="https://github.com/luciferdarshan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-bg-void border border-border-subtle rounded-sm px-3 py-2 hover:border-neon-violet/30 transition-colors group/link"
                id="contact-github-link"
              >
                <span className="font-mono text-xs text-text-muted group-hover/link:text-neon-violet transition-colors">
                  /luciferdarshan
                </span>
                <MessageSquare className="w-3 h-3 text-text-dim group-hover/link:text-neon-violet transition-colors" />
              </a>
            </div>

            {/* Availability note */}
            <div className="font-mono text-xs text-text-dim leading-relaxed">
              <span className="text-neon-green">◆</span> Available for collaboration,
              open source discussions, or just to say hi.
            </div>
          </motion.div>

          {/* Right: message form */}
          <motion.div variants={itemVariants}>
            <div className="anime-card p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
              <div className="font-mono text-xs text-text-dim tracking-widest uppercase mb-6">
                TRANSMIT MESSAGE
              </div>

              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-6"
                  >
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="font-mono text-xs text-neon-cyan/70 tracking-widest uppercase">
                        IDENTIFIER // NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Your name"
                        className="cyber-input"
                        disabled={isSending}
                        id="contact-name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="font-mono text-xs text-neon-cyan/70 tracking-widest uppercase">
                        RETURN ADDRESS // EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="cyber-input"
                        disabled={isSending}
                        id="contact-email"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="font-mono text-xs text-neon-cyan/70 tracking-widest uppercase">
                        PAYLOAD // MESSAGE
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Write your message here..."
                        className="cyber-input resize-none"
                        disabled={isSending}
                        id="contact-message"
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-mono text-xs text-text-dim tracking-widest uppercase">
                        {isSending ? (
                          <span className="text-neon-cyan animate-pulse text-xs">TRANSMITTING...</span>
                        ) : (
                          "SIGNAL READY TO TRANSMIT"
                        )}
                      </span>
                      <button
                        type="submit"
                        disabled={isSending}
                        className="flex items-center gap-2 px-6 py-3 bg-neon-green/10 border border-neon-green/40 hover:bg-neon-green/20 hover:border-neon-green/70 text-neon-green font-mono text-sm tracking-widest uppercase rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
                        style={{ boxShadow: "0 0 15px rgba(0,255,136,0.1)" }}
                        id="contact-submit"
                      >
                        <Send className="w-3 h-3" />
                        TRANSMIT
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    {/* Anime confirm stamp */}
                    <motion.div
                      initial={{ scale: 3, opacity: 0, rotate: -20 }}
                      animate={{ scale: 1, opacity: 1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.1 }}
                      className="w-20 h-20 border-2 border-dashed border-neon-green rounded-sm flex flex-col items-center justify-center mb-6"
                      style={{ boxShadow: "0 0 30px rgba(0,255,136,0.2)" }}
                    >
                      <span className="font-sans font-bold text-lg text-neon-green">ACK</span>
                      <span className="font-mono text-[8px] text-neon-green/70 tracking-widest">SENT</span>
                    </motion.div>

                    <h3 className="font-sans font-bold text-xl text-text-primary mb-2">
                      Message Transmitted
                    </h3>
                    <p className="font-mono text-xs text-text-dim tracking-wide mb-8 max-w-xs">
                      YOUR SIGNAL HAS BEEN RECEIVED AND QUEUED FOR PROCESSING.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 border border-border-subtle hover:border-neon-cyan/40 text-text-muted hover:text-neon-cyan font-mono text-xs tracking-widest uppercase rounded-xl transition-all duration-300 cursor-pointer"
                      id="contact-reset"
                    >
                      SEND ANOTHER
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
