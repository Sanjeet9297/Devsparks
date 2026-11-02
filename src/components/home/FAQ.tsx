"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqData } from "@/data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <Container>
        <SectionHeading
          kicker="Questions, answered"
          title={
            <>
              Before we get{" "}
              <span className="text-gradient">started.</span>
            </>
          }
          subtitle="A few useful things to know before you reach out."
        />

        <div className="max-w-[820px] mx-auto divide-y divide-white/[0.08] border-b border-white/[0.08]">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left font-heading font-semibold text-base sm:text-lg text-[#f5f7ff] hover:text-[#53f5dc] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#53f5dc] rounded-lg"
                >
                  <span>{item.question}</span>
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full border border-white/[0.1] flex items-center justify-center text-[#53f5dc] transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-[#53f5dc]/15 border-[#53f5dc]/40" : ""
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-[13px] text-[#a3adc8] leading-relaxed pr-6 sm:pr-10">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

