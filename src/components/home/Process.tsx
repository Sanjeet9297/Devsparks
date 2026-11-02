import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { processData } from "@/data/technologies";

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <Container>
        <SectionHeading
          kicker="How we work"
          title={
            <>
              A clear path from
              <br />
              <span className="text-gradient">idea to launch.</span>
            </>
          }
          subtitle="Good outcomes come from making the process understandable, collaborative and focused."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {processData.map((item) => (
            <div
              key={item.step}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border-t-2 border-t-[#53f5dc] border-x border-b border-white/[0.08] transition-all duration-300 hover:-translate-y-1 hover:border-t-[#9ef9e9] hover:bg-white/[0.04]"
            >
              {/* Step indicator */}
              <span className="font-heading text-xs font-bold text-[#53f5dc] tracking-wider block mb-3.5">
                STEP {item.step} / {item.phase}
              </span>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-[#f5f7ff] tracking-tight mb-2.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#a3adc8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

