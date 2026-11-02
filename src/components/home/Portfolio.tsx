import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/projects";

const artStyles: Record<string, { bg: string; border: string }> = {
  "brand-web": {
    bg: "radial-gradient(ellipse at 50% 20%, rgba(83, 245, 220, 0.2), transparent 65%), linear-gradient(135deg, #1b2442, #101629)",
    border: "rgba(83, 245, 220, 0.25)",
  },
  "mobile-product": {
    bg: "radial-gradient(ellipse at 50% 20%, rgba(189, 140, 255, 0.22), transparent 65%), linear-gradient(135deg, #211b40, #101629)",
    border: "rgba(189, 140, 255, 0.25)",
  },
  "business-dashboard": {
    bg: "radial-gradient(ellipse at 50% 20%, rgba(120, 134, 255, 0.22), transparent 65%), linear-gradient(135deg, #1c2547, #101629)",
    border: "rgba(120, 134, 255, 0.25)",
  },
  "ai-automation-concept": {
    bg: "radial-gradient(ellipse at 50% 20%, rgba(255, 181, 107, 0.18), transparent 65%), linear-gradient(135deg, #2a2039, #101629)",
    border: "rgba(255, 181, 107, 0.25)",
  },
};

export default function Portfolio() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <Container>
        <SectionHeading
          kicker="Selected capabilities"
          title={
            <>
              Good work starts with
              <br />
              <span className="text-gradient">a clear purpose.</span>
            </>
          }
          subtitle="Here are the kinds of digital experiences we can help bring to life. These are illustrative concept cards, not client case studies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => {
            const art = artStyles[project.id] || artStyles["brand-web"];
            return (
              <div
                key={project.id}
                className="group p-6 sm:p-7 rounded-2xl bg-[#101629] border border-white/[0.09] transition-all duration-300 hover:border-[#53f5dc]/35 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Abstract CSS Art */}
                  <div
                    className="relative h-40 sm:h-44 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-white/[0.06] transition-transform duration-500 group-hover:scale-[1.01]"
                    style={{ background: art.bg }}
                  >
                    {/* Geometric Rotating/Angled Box Accent */}
                    <div
                      className="absolute w-48 h-48 rounded-[35%] pointer-events-none transition-transform duration-700 group-hover:rotate-45"
                      style={{
                        border: `1px solid ${art.border}`,
                        transform: "rotate(30deg)",
                      }}
                    />

                    {/* Subtle Concentric Center Dot */}
                    <div className="w-2 h-2 rounded-full bg-white/40 pointer-events-none" />

                    {/* Centered Art Label */}
                    <span className="relative z-10 font-heading font-bold text-xl sm:text-2xl text-[#f5f7ff] tracking-tight">
                      {project.artLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#f5f7ff] tracking-tight mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#a3adc8] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-[11px] font-medium text-[#cbd4f1] px-2.5 py-1 rounded-full border border-white/[0.09] bg-white/[0.02]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

