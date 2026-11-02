"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-x-0 top-[78px] bg-[#0a0e1c]/95 backdrop-blur-xl border-b border-white/[0.1] px-6 py-6 transition-all duration-300 z-40 shadow-2xl">
      <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-[#a3adc8] hover:text-[#53f5dc] text-base font-medium py-1 transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <div className="pt-3 border-t border-white/[0.08]">
          <Link
            href="#contact"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#53f5dc] to-[#9ef9e9] px-5 py-3 text-sm font-bold text-[#071018] shadow-[0_10px_25px_rgba(83,245,220,0.25)] transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s talk
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

