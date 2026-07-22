"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { PhoneCall, MessageSquare, Send, CheckCircle2, Clock, MapPin } from "lucide-react";
import GlowButton from "../ui/GlowButton";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    locality: "",
    service: "Invisible Grills",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const phoneNumber = "+919876543210"; // Flagged for real phone number
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    "Hi Golden Enterprises, I would like to book a free on-site balcony measurement and quote for my home in Chennai."
  )}`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree endpoint placeholder: https://formspree.io/f/YOUR_FORMSPREE_ID
    try {
      // Simulate Formspree submission
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
      setFormState({ name: "", phone: "", locality: "", service: "Invisible Grills", message: "" });
    } catch {
      // Handle error if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0A1218]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2E86FF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Call / WhatsApp & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E86FF]/10 border border-[#2E86FF]/30 w-fit mb-4">
                <span className="text-xs font-semibold tracking-wider text-[#2E86FF] uppercase">
                  Free On-Site Inspection
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans mb-6">
                Get Your <span className="text-wire-gradient">Free Quote</span>
              </h2>

              <p className="text-base text-[#C7CDD3] font-light leading-relaxed mb-8">
                Book a zero-obligation balcony measurement today. Our team will bring sample 316-grade SS wire cables and provide an instant custom quote for your home in Chennai.
              </p>

              {/* Direct Quick Action Buttons */}
              <div className="space-y-4 mb-10">
                {/* Phone Call Link */}
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#0D1821] border border-white/10 hover:border-[#2E86FF] transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2E86FF]/20 border border-[#2E86FF]/40 flex items-center justify-center text-[#2E86FF] group-hover:bg-[#2E86FF] group-hover:text-white transition-colors">
                      <PhoneCall className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#9AA5AD] uppercase tracking-wider block">Call Directly</span>
                      <span className="text-lg font-bold text-white font-mono">{phoneNumber}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#2E86FF] group-hover:translate-x-1 transition-transform">
                    Call Now →
                  </span>
                </a>

                {/* WhatsApp Click-to-Chat Link */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#0D1821] border border-white/10 hover:border-[#25D366] transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#9AA5AD] uppercase tracking-wider block">WhatsApp Chat</span>
                      <span className="text-sm font-bold text-white">Instant Quote on WhatsApp</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#25D366] group-hover:translate-x-1 transition-transform">
                    Chat Now →
                  </span>
                </a>
              </div>
            </div>

            {/* Service Guarantees */}
            <div className="space-y-3 pt-6 border-t border-white/10 text-xs text-[#9AA5AD]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F2A93B]" />
                <span>Working Hours: Monday – Sunday (8:00 AM – 8:00 PM)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#2E86FF]" />
                <span>Covering all areas: Adyar, ECR, OMR, Anna Nagar, Velachery, Porur & Tambaram</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D1821]/80 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#2E86FF]/20 border border-[#2E86FF] text-[#2E86FF] flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(46,134,255,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Quote Request Submitted!</h3>
                  <p className="text-sm text-[#C7CDD3] max-w-md mx-auto mb-6">
                    Thank you! Our engineering team will call you back within 30 minutes to confirm your free on-site balcony measurement.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 text-xs text-white font-semibold hover:bg-white/20 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7CDD3] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0A1218] border border-white/10 text-white placeholder-[#9AA5AD]/60 focus:border-[#2E86FF] focus:outline-none text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7CDD3] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0A1218] border border-white/10 text-white placeholder-[#9AA5AD]/60 focus:border-[#2E86FF] focus:outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7CDD3] mb-2">
                        Locality in Chennai *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.locality}
                        onChange={(e) => setFormState({ ...formState, locality: e.target.value })}
                        placeholder="e.g. Adyar / OMR / Anna Nagar"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0A1218] border border-white/10 text-white placeholder-[#9AA5AD]/60 focus:border-[#2E86FF] focus:outline-none text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7CDD3] mb-2">
                        Service Required
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0A1218] border border-white/10 text-white focus:border-[#2E86FF] focus:outline-none text-sm transition-colors"
                      >
                        <option value="Invisible Grills">316 Invisible Grills</option>
                        <option value="Pigeon Safety Nets">Pigeon Safety Nets</option>
                        <option value="Balcony Protection">Complete Balcony Protection</option>
                        <option value="Duct Area Nets">AC Duct Area Netting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#C7CDD3] mb-2">
                      Balcony Details / Message (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="e.g. 12th floor apartment balcony, approx 100 sqft area..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0A1218] border border-white/10 text-white placeholder-[#9AA5AD]/60 focus:border-[#2E86FF] focus:outline-none text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2E86FF] to-[#1E62D0] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(46,134,255,0.4)] hover:shadow-[0_0_35px_rgba(46,134,255,0.7)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Book Free Inspection & Get Quote</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#9AA5AD] text-center">
                    🔒 Your information is 100% private and used only for schedule booking in Chennai.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
