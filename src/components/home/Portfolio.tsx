import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/projects";

const artStyles: Record<
  string,
  {
    bgDark: string;
    bgLight: string;
    borderDark: string;
    borderLight: string;
    accentBorder: string;
    accentBorderLight: string;
  }
> = {
  "brand-web": {
    bgDark:
      "radial-gradient(ellipse at 50% 20%, rgba(83, 245, 220, 0.2), transparent 65%), linear-gradient(135deg, #1b2442, #101629)",
    bgLight:
      "radial-gradient(ellipse at 50% 20%, rgba(13, 148, 136, 0.15), transparent 70%), linear-gradient(135deg, #e0f2fe, #f0fdfa)",
    borderDark: "rgba(255, 255, 255, 0.08)",
    borderLight: "rgba(0, 0, 0, 0.08)",
    accentBorder: "rgba(83, 245, 220, 0.35)",
    accentBorderLight: "rgba(13, 148, 136, 0.4)",
  },
  "mobile-product": {
    bgDark:
      "radial-gradient(ellipse at 50% 20%, rgba(189, 140, 255, 0.22), transparent 65%), linear-gradient(135deg, #211b40, #101629)",
    bgLight:
      "radial-gradient(ellipse at 50% 20%, rgba(147, 51, 234, 0.12), transparent 70%), linear-gradient(135deg, #f3e8ff, #f8fafc)",
    borderDark: "rgba(255, 255, 255, 0.08)",
    borderLight: "rgba(0, 0, 0, 0.08)",
    accentBorder: "rgba(189, 140, 255, 0.35)",
    accentBorderLight: "rgba(147, 51, 234, 0.4)",
  },
  "business-dashboard": {
    bgDark:
      "radial-gradient(ellipse at 50% 20%, rgba(120, 134, 255, 0.22), transparent 65%), linear-gradient(135deg, #1c2547, #101629)",
    bgLight:
      "radial-gradient(ellipse at 50% 20%, rgba(79, 70, 229, 0.12), transparent 70%), linear-gradient(135deg, #e0e7ff, #f8fafc)",
    borderDark: "rgba(255, 255, 255, 0.08)",
    borderLight: "rgba(0, 0, 0, 0.08)",
    accentBorder: "rgba(120, 134, 255, 0.35)",
    accentBorderLight: "rgba(79, 70, 229, 0.4)",
  },
  "ai-automation-concept": {
    bgDark:
      "radial-gradient(ellipse at 50% 20%, rgba(255, 181, 107, 0.18), transparent 65%), linear-gradient(135deg, #2a2039, #101629)",
    bgLight:
      "radial-gradient(ellipse at 50% 20%, rgba(245, 158, 11, 0.15), transparent 70%), linear-gradient(135deg, #fef3c7, #fdf4ff)",
    borderDark: "rgba(255, 255, 255, 0.08)",
    borderLight: "rgba(0, 0, 0, 0.08)",
    accentBorder: "rgba(255, 181, 107, 0.35)",
    accentBorderLight: "rgba(217, 119, 6, 0.4)",
  },
};

export default function Portfolio() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-white/[0.08] [html.light_&]:border-slate-200/80 relative">
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
                className="group p-6 sm:p-7 rounded-2xl bg-[#101629] [html.light_&]:bg-white [html.light_&]:shadow-lg [html.light_&]:shadow-slate-200/50 border border-white/[0.09] [html.light_&]:border-slate-200/90 transition-all duration-300 hover:border-[#53f5dc]/35 [html.light_&]:hover:border-teal-500/40 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Abstract CSS Art */}
                  <div
                    className="relative h-40 sm:h-44 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-white/[0.06] [html.light_&]:border-slate-200 transition-transform duration-500 group-hover:scale-[1.01]"
                    style={{
                      background: "var(--project-art-bg, " + art.bgDark + ")",
                    }}
                  >
                    {/* Dark Art Background Layer */}
                    <div
                      className="absolute inset-0 block [html.light_&]:hidden"
                      style={{ background: art.bgDark }}
                    />

                    {/* Light Art Background Layer */}
                    <div
                      className="absolute inset-0 hidden [html.light_&]:block"
                      style={{ background: art.bgLight }}
                    />

                    {/* Geometric Rotating/Angled Box Accent */}
                    <div
                      className="absolute w-48 h-48 rounded-[35%] pointer-events-none transition-transform duration-700 group-hover:rotate-45 block [html.light_&]:hidden"
                      style={{
                        border: `1px solid ${art.accentBorder}`,
                        transform: "rotate(30deg)",
                      }}
                    />

                    <div
                      className="absolute w-48 h-48 rounded-[35%] pointer-events-none transition-transform duration-700 group-hover:rotate-45 hidden [html.light_&]:block"
                      style={{
                        border: `1.5px solid ${art.accentBorderLight}`,
                        transform: "rotate(30deg)",
                      }}
                    />

                    {/* Subtle Concentric Center Dot */}
                    <div className="w-2 h-2 rounded-full bg-white/40 [html.light_&]:bg-slate-700/30 pointer-events-none z-10" />

                    {/* Centered Art Label */}
                    <span className="relative z-10 font-heading font-bold text-xl sm:text-2xl text-[#f5f7ff] [html.light_&]:text-[#0f172a] tracking-tight">
                      {project.artLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#f5f7ff] [html.light_&]:text-[#0f172a] tracking-tight mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#a3adc8] [html.light_&]:text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-[11px] font-medium text-[#cbd4f1] [html.light_&]:text-slate-700 px-2.5 py-1 rounded-full border border-white/[0.09] [html.light_&]:border-slate-200 bg-white/[0.02] [html.light_&]:bg-slate-100/90"
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
