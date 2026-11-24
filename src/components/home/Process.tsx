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
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] [html.light_&]:bg-white [html.light_&]:shadow-md [html.light_&]:shadow-slate-200/40 border-t-2 border-t-[#53f5dc] [html.light_&]:border-t-teal-600 border-x border-b border-white/[0.08] [html.light_&]:border-slate-200/90 transition-all duration-300 hover:-translate-y-1 hover:border-t-[#9ef9e9] hover:bg-white/[0.04] [html.light_&]:hover:shadow-lg"
            >
              {/* Step indicator */}
              <span className="font-heading text-xs font-bold text-[#53f5dc] [html.light_&]:text-teal-700 tracking-wider block mb-3.5">
                STEP {item.step} / {item.phase}
              </span>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-[#f5f7ff] [html.light_&]:text-[#0f172a] tracking-tight mb-2.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-[#a3adc8] [html.light_&]:text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

