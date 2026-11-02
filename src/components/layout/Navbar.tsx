"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import MobileMenu from "@/components/layout/MobileMenu";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ["home", "about", "services", "work", "process", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#080b16]/90 backdrop-blur-xl border-white/[0.08] shadow-lg shadow-black/20"
            : "bg-[#080b16]/75 backdrop-blur-md border-white/[0.05]"
        }`}
      >
        <Container>
          <div className="h-[74px] sm:h-[78px] flex items-center justify-between gap-6">
            {/* Logo */}
            <Link
              href="/#home"
              className="group inline-flex items-center gap-2.5 font-bold text-xl sm:text-2xl tracking-tight text-[#f5f7ff]"
              aria-label="DevSparks home"
            >
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#7886ff] to-[#53f5dc] flex items-center justify-center font-black text-[#071018] text-base shadow-[0_0_24px_rgba(83,245,220,0.3)] transition-transform duration-300 group-hover:scale-105">
                D
              </span>
              <span className="font-heading">
                Dev<span className="text-[#53f5dc]">Sparks</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#a3adc8]"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const sectionId = link.href.replace("/#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors duration-200 hover:text-[#53f5dc] relative py-1 ${
                      isActive ? "text-[#53f5dc] font-semibold" : ""
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#53f5dc] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/#contact"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#53f5dc] to-[#9ef9e9] px-4.5 py-2 text-xs sm:text-[13px] font-bold text-[#071018] shadow-[0_10px_25px_rgba(83,245,220,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(83,245,220,0.3)]"
              >
                Let&apos;s talk
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-white/[0.1] text-[#f5f7ff] hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-[#53f5dc]"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-[#53f5dc]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}

