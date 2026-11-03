"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Sparkles, Command } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:py-24 overflow-hidden"
      aria-label="Hero Introduction"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px] lg:min-h-[640px]">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#53f5dc]/30 bg-[#53f5dc]/5 text-[#53f5dc] text-[11px] font-extrabold uppercase tracking-[2.1px] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#53f5dc] shadow-[0_0_10px_#53f5dc] animate-pulse" />
              Independent digital studio
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-[#f5f7ff] tracking-tight leading-[1.04] mb-6">
              Ideas deserve
              <br />
              to become <span className="text-gradient">something</span>
              <br />
              remarkable.
            </h1>

            {/* Subtitle */}
            <p className="max-w-[540px] text-base sm:text-lg text-[#a3adc8] leading-relaxed mb-8">
              We turn ambitious ideas into useful digital experiences — from fast,
              beautiful websites to mobile apps and intelligent software that helps
              businesses move forward.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#53f5dc] text-[#071018] font-bold text-sm sm:text-base border border-[#53f5dc] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(83,245,220,0.28)]"
              >
                Start a project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] text-[#f5f7ff] font-bold text-sm sm:text-base border border-white/[0.12] transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.2] hover:-translate-y-0.5"
              >
                Explore our services
                <ArrowDown className="w-4 h-4 text-[#53f5dc]" />
              </Link>
            </div>

            {/* Supporting Points */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-[13px] text-[#a3adc8]">
              <div className="flex items-center gap-2">
                <span className="text-[#53f5dc] font-bold">✓</span>
                <span>Thoughtful design</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#53f5dc] font-bold">✓</span>
                <span>Reliable development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#53f5dc] font-bold">✓</span>
                <span>Built to grow</span>
              </div>
            </div>
          </div>

          {/* Right Column: Neon Orbit 3D Illustration */}
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[460px] md:h-[500px] flex items-center justify-center">
            {/* Ambient Background Glow behind orbit */}
            <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full bg-[#4c5dff]/20 blur-[80px] -z-10 animate-pulse-glow pointer-events-none" />

            {/* Orbit Container with perspective */}
            <div
              className="relative w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] flex items-center justify-center"
              style={{ perspective: "1000px" }}
            >
              {/* Outer Orbit Ring */}
              <div
                className="absolute w-[290px] sm:w-[400px] h-[290px] sm:h-[400px] rounded-full border border-[#53f5dc]/30 animate-orbit-2 pointer-events-none"
                style={{
                  transformStyle: "preserve-3d",
                }}
              />

              {/* Middle Orbit Ring */}
              <div
                className="absolute w-[230px] sm:w-[320px] h-[230px] sm:h-[320px] rounded-full border border-[#7886ff]/45 animate-orbit-1 pointer-events-none"
                style={{
                  transformStyle: "preserve-3d",
                }}
              />

              {/* Inner Dashed Orbit Ring */}
              <div
                className="absolute w-[170px] sm:w-[240px] h-[170px] sm:h-[240px] rounded-full border border-dashed border-[#bd8cff]/40 animate-orbit-3 pointer-events-none"
                style={{
                  transformStyle: "preserve-3d",
                }}
              />

              {/* Orbit Glowing Cyan Dot */}
              <div
                className="absolute w-3 h-3 rounded-full bg-[#53f5dc] shadow-[0_0_20px_#53f5dc] -top-2 right-[20%] z-20 pointer-events-none"
              />

              {/* Central Glowing Core "D" - Animated Up & Down Motion */}
              <motion.div
                animate={{
                  y: [-20, 20, -20],
                  rotate: [-8, 4, -8],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.08 }}
                className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#7886ff] to-[#53f5dc] flex items-center justify-center shadow-[0_0_80px_rgba(120,134,255,0.55)] select-none cursor-pointer"
              >
                <span className="font-heading font-black text-5xl sm:text-6xl text-[#071018]">
                  D
                </span>
              </motion.div>

              {/* Floating Glass Card 1 (Top Left) */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 left-0 sm:-left-4 z-20 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-[#11182b]/85 border border-white/[0.12] backdrop-blur-md shadow-2xl pointer-events-none max-w-[170px] sm:max-w-[190px]"
              >
                <div className="flex items-center gap-1.5 text-[#53f5dc] text-xs font-semibold mb-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="font-bold text-[#f5f7ff]">Creative by design</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#a3adc8]">Made for people</p>
              </motion.div>

              {/* Floating Glass Card 2 (Bottom Right) */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute bottom-4 right-0 sm:-right-4 z-20 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-[#11182b]/85 border border-white/[0.12] backdrop-blur-md shadow-2xl pointer-events-none max-w-[170px] sm:max-w-[190px]"
              >
                <div className="flex items-center gap-1.5 text-[#7886ff] text-xs font-semibold mb-0.5">
                  <Command className="w-3.5 h-3.5" />
                  <span className="font-bold text-[#f5f7ff]">Code with purpose</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#a3adc8]">Ready to scale</p>
              </motion.div>

              {/* Floating Glass Card 3 (Bottom Left) */}
              <motion.div
                animate={{ y: [-8, 12, -8] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="absolute -bottom-4 left-4 sm:left-2 z-20 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-[#11182b]/85 border border-white/[0.12] backdrop-blur-md shadow-2xl pointer-events-none max-w-[170px] sm:max-w-[190px]"
              >
                <div className="flex items-center gap-1.5 text-[#bd8cff] text-xs font-semibold mb-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span className="font-bold text-[#f5f7ff]">Ideas → impact</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#a3adc8]">One step at a time</p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

