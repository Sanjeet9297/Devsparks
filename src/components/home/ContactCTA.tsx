"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import Container from "@/components/ui/Container";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website design & development",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("loading");

    // Demo submission handling without page reload
    setTimeout(() => {
      setStatus("success");

      // Also trigger mailto in client
      const to = "hello@devsparks.in";
      const subject = encodeURIComponent(`Project enquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nProject details:\n${formData.message}`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <Container>
        <div className="rounded-[28px] border border-[#7886ff]/30 bg-[#0d1222] bg-[radial-gradient(ellipse_at_5%_0%,rgba(120,134,255,0.14),transparent_55%)] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Studio info */}
          <div className="lg:col-span-5 p-8 sm:p-10 md:p-12 flex flex-col justify-between">
            <div>
              <span className="text-[#53f5dc] text-[11px] font-extrabold uppercase tracking-[2.1px] block mb-3">
                Let&apos;s talk
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#f5f7ff] tracking-tight leading-[1.12] mb-4">
                Have an idea?
                <br />
                <span className="text-gradient">Let&apos;s make it real.</span>
              </h2>
              <p className="text-xs sm:text-[13px] text-[#a3adc8] leading-relaxed mb-8">
                Tell us a little about what you&apos;re planning. We can start with a
                simple conversation and figure out the right next step together.
              </p>
            </div>

            <div className="space-y-5 pt-6 border-t border-white/[0.08]">
              <div>
                <small className="block text-[10px] text-[#a3adc8] uppercase tracking-[1.4px] font-semibold mb-1">
                  Email (Placeholder — verify before publishing)
                </small>
                <a
                  href="mailto:hello@devsparks.in"
                  className="font-heading font-semibold text-sm sm:text-base text-[#f5f7ff] hover:text-[#53f5dc] transition-colors"
                >
                  hello@devsparks.in
                </a>
              </div>

              <div>
                <small className="block text-[10px] text-[#a3adc8] uppercase tracking-[1.4px] font-semibold mb-1">
                  Instagram
                </small>
                <a
                  href="https://www.instagram.com/devsparks.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading font-semibold text-sm sm:text-base text-[#53f5dc] hover:text-[#9ef9e9] transition-colors inline-flex items-center gap-1"
                >
                  @devsparks.in
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <small className="block text-[10px] text-[#a3adc8] uppercase tracking-[1.4px] font-semibold mb-1">
                  Good for
                </small>
                <p className="text-xs sm:text-[13px] text-[#e6ebff] font-medium">
                  New projects · Improvements · Collaborations
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 md:p-12 bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-white/[0.08]">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-14 h-14 rounded-full bg-[#53f5dc]/15 border border-[#53f5dc]/40 flex items-center justify-center text-[#53f5dc] mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#f5f7ff] mb-2">
                  Message Prepared!
                </h3>
                <p className="text-xs sm:text-sm text-[#a3adc8] max-w-md leading-relaxed mb-6">
                  Thank you, <span className="text-[#f5f7ff] font-semibold">{formData.name}</span>! Your email client has been prompted with your message details. In production, this form connects directly to an Express API backend.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      email: "",
                      service: "Website design & development",
                      message: "",
                    });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.12] text-xs font-semibold text-[#53f5dc] hover:bg-white/[0.08] transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-bold text-[#dce2f7] mb-1.5"
                    >
                      Your name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Sharma"
                      className="w-full rounded-xl border border-white/[0.12] bg-[#080d1b] px-3.5 py-3 text-xs sm:text-sm text-[#f5f7ff] placeholder:text-[#a3adc8]/40 focus:border-[#53f5dc]/70 focus:outline-none focus:ring-2 focus:ring-[#53f5dc]/15 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-bold text-[#dce2f7] mb-1.5"
                    >
                      Email address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/[0.12] bg-[#080d1b] px-3.5 py-3 text-xs sm:text-sm text-[#f5f7ff] placeholder:text-[#a3adc8]/40 focus:border-[#53f5dc]/70 focus:outline-none focus:ring-2 focus:ring-[#53f5dc]/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-[11px] font-bold text-[#dce2f7] mb-1.5"
                  >
                    What can we help with?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/[0.12] bg-[#080d1b] px-3.5 py-3 text-xs sm:text-sm text-[#f5f7ff] focus:border-[#53f5dc]/70 focus:outline-none focus:ring-2 focus:ring-[#53f5dc]/15 transition-all"
                  >
                    <option value="Website design & development">Website design & development</option>
                    <option value="Mobile app development">Mobile app development</option>
                    <option value="AI & automation">AI & automation</option>
                    <option value="Custom software / API">Custom software / API</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="SaaS / MVP">SaaS / MVP</option>
                    <option value="Something else">Something else</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-bold text-[#dce2f7] mb-1.5"
                  >
                    Tell us about your idea *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="A little about the project, goals and timeline..."
                    className="w-full rounded-xl border border-white/[0.12] bg-[#080d1b] px-3.5 py-3 text-xs sm:text-sm text-[#f5f7ff] placeholder:text-[#a3adc8]/40 focus:border-[#53f5dc]/70 focus:outline-none focus:ring-2 focus:ring-[#53f5dc]/15 transition-all resize-y min-h-[110px]"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#53f5dc] text-[#071018] font-bold text-xs sm:text-sm border border-[#53f5dc] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(83,245,220,0.25)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    {status === "loading" ? "Preparing..." : "Prepare email"}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <p className="mt-3 text-[10px] text-[#a3adc8]/80 leading-normal">
                    This demo form opens your email app with a pre-filled message. It does not store or send data to a database.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

