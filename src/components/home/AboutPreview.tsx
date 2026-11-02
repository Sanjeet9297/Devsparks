import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

const highlights = [
  "Clear, collaborative process",
  "Modern technology stack",
  "Responsive, accessible UI",
  "Growth-ready foundations",
];

const stats = [
  { value: "01", label: "Collaborative approach" },
  { value: "02", label: "Design meets technology" },
  { value: "03", label: "Quality-first mindset" },
  { value: "∞", label: "Room to keep improving" },
];

export default function AboutPreview() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Abstract Emblem & Floating Mini-Stats */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative min-h-[340px] sm:min-h-[400px] rounded-3xl border border-white/[0.1] bg-gradient-to-br from-[#141b30] to-[#0b1020] flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Radial glow background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(102,117,255,0.18),transparent_60%)] pointer-events-none" />

              {/* Concentric rings */}
              <div className="absolute w-[280px] h-[280px] rounded-full border border-[#53f5dc]/20 pointer-events-none" />
              <div className="absolute w-[210px] h-[210px] rounded-full border border-[#9e8cff]/30 pointer-events-none" />

              {/* Center Emblem */}
              <div className="relative z-10 w-28 h-28 rounded-3xl bg-gradient-to-br from-[#7886ff] to-[#53f5dc] flex items-center justify-center -rotate-6 shadow-[0_0_60px_rgba(120,134,255,0.4)]">
                <span className="font-heading font-black text-4xl sm:text-5xl text-[#071018] flex items-center">
                  D<span className="text-[#f7fbff] text-2xl ml-0.5">✦</span>
                </span>
              </div>

              {/* Mini Stat 1 (Top Left) */}
              <div className="absolute top-5 left-5 z-20 px-3.5 py-2.5 rounded-2xl bg-[#11182b]/90 border border-white/[0.12] backdrop-blur-md shadow-lg">
                <span className="font-heading font-bold text-sm text-[#f5f7ff] block">
                  Design + code
                </span>
                <span className="text-[11px] text-[#a3adc8]">One focused team</span>
              </div>

              {/* Mini Stat 2 (Bottom Right) */}
              <div className="absolute bottom-5 right-5 z-20 px-3.5 py-2.5 rounded-2xl bg-[#11182b]/90 border border-white/[0.12] backdrop-blur-md shadow-lg text-right">
                <span className="font-heading font-bold text-sm text-[#f5f7ff] block">
                  Built around you
                </span>
                <span className="text-[11px] text-[#a3adc8]">Not one-size-fits-all</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-[#53f5dc] text-[11px] font-extrabold uppercase tracking-[2.1px] block mb-3">
              A little about us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f7ff] tracking-tight leading-[1.12] mb-6">
              Small details.
              <br />
              <span className="text-gradient">Big-picture thinking.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#a3adc8] leading-relaxed mb-8">
              <p>
                DevSparks is a digital studio for people who want to build something
                meaningful. We bring design, development and practical problem-solving
                together to make technology feel simpler and work harder for your
                business.
              </p>
              <p>
                Whether you&apos;re launching a new idea or improving an existing
                product, our focus is the same: clear communication, thoughtful
                execution and a result that makes sense for your users.
              </p>
            </div>

            {/* Checkmark Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#e6ebff]">
                  <span className="text-[#53f5dc] font-bold">✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] text-[#f5f7ff] font-bold text-xs sm:text-sm border border-white/[0.12] transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.2] hover:-translate-y-0.5"
            >
              Tell us your idea
              <ArrowUpRight className="w-4 h-4 text-[#53f5dc]" />
            </Link>
          </div>
        </div>

        {/* Bottom 4 Highlight Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/[0.09] rounded-2xl mt-14 bg-white/[0.02] divide-y lg:divide-y-0 divide-x-0 sm:divide-x divide-white/[0.09] overflow-hidden">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-5 sm:p-6 text-center">
              <span className="font-heading font-bold text-2xl sm:text-3xl text-[#f5f7ff] tracking-tight block mb-1">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-xs text-[#a3adc8]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

