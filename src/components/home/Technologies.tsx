import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyDevSparksData, coreTechnologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <section className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <Container>
        <SectionHeading
          kicker="Why DevSparks"
          title={
            <>
              A partner that cares about
              <br />
              <span className="text-gradient">the whole picture.</span>
            </>
          }
        />

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14">
          {whyDevSparksData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.03] [html.light_&]:bg-white [html.light_&]:shadow-md [html.light_&]:shadow-slate-200/40 border border-white/[0.09] [html.light_&]:border-slate-200/90 transition-all duration-300 hover:bg-white/[0.05] [html.light_&]:hover:shadow-lg hover:border-white/[0.16] hover:-translate-y-1"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-lg">{item.icon}</span>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-[#f5f7ff] [html.light_&]:text-[#0f172a]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-[#a3adc8] [html.light_&]:text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Modern Tech Foundation Pill Ribbon */}
        <div className="text-center pt-8 border-t border-white/[0.06] [html.light_&]:border-slate-200">
          <span className="text-xs uppercase tracking-wider text-[#a3adc8] [html.light_&]:text-slate-500 font-semibold block mb-4">
            Engineered with modern, battle-tested technologies
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {coreTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#f5f7ff]/90 [html.light_&]:text-[#0f172a] bg-[#101629] [html.light_&]:bg-white border border-white/[0.08] [html.light_&]:border-slate-200/90 [html.light_&]:shadow-sm transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

