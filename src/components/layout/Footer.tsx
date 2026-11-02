import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import BackToTop from "@/components/layout/BackToTop";

export default function Footer() {
  const currentYear = 2026;

  return (
    <>
      <footer className="w-full border-t border-white/[0.08] bg-[#080b16] pt-12 pb-8">
        <Container>
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-10">
            {/* Brand Info */}
            <div className="max-w-sm">
              <Link
                href="/#home"
                className="inline-flex items-center gap-2.5 font-bold text-xl tracking-tight text-[#f5f7ff] group"
                aria-label="DevSparks home"
              >
                <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7886ff] to-[#53f5dc] flex items-center justify-center font-black text-[#071018] text-sm shadow-[0_0_20px_rgba(83,245,220,0.25)]">
                  D
                </span>
                <span className="font-heading">
                  Dev<span className="text-[#53f5dc]">Sparks</span>
                </span>
              </Link>
              <p className="mt-3.5 text-xs sm:text-[13px] text-[#a3adc8] leading-relaxed">
                We build useful digital experiences for ambitious ideas. Design with
                purpose. Code with care.
              </p>
            </div>

            {/* Navigation & Social Links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-[13px] text-[#a3adc8]">
              <Link href="/#home" className="hover:text-[#53f5dc] transition-colors">
                Home
              </Link>
              <Link href="/#about" className="hover:text-[#53f5dc] transition-colors">
                About
              </Link>
              <Link href="/#services" className="hover:text-[#53f5dc] transition-colors">
                Services
              </Link>
              <Link href="/#work" className="hover:text-[#53f5dc] transition-colors">
                Our Work
              </Link>
              <Link href="/#faq" className="hover:text-[#53f5dc] transition-colors">
                FAQ
              </Link>
              <Link href="/#contact" className="hover:text-[#53f5dc] transition-colors">
                Contact
              </Link>
              <a
                href="https://www.instagram.com/devsparks.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#53f5dc] hover:text-[#9ef9e9] transition-colors font-medium"
              >
                Instagram
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a3adc8]">
            <span>© {currentYear} DevSparks. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-[#f5f7ff] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#f5f7ff] transition-colors">
                Terms of Service
              </Link>
              <span className="text-[#53f5dc]/70">Build. Imagine. Iterate.</span>
            </div>
          </div>
        </Container>
      </footer>

      {/* Floating Back to Top Button */}
      <BackToTop />
    </>
  );
}
