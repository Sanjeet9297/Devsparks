import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Portfolio from "@/components/home/Portfolio";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Our Work & Concepts — DevSparks",
  description:
    "Explore our product architecture concepts across Web Applications, Mobile Experiences, Dashboards, and AI Workflows.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-8 pb-16">
      <Container className="mb-12">
        <div className="max-w-3xl">
          <span className="text-[#53f5dc] text-[11px] font-extrabold uppercase tracking-[2.1px] block mb-3">
            Portfolio & Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f5f7ff] tracking-tight leading-[1.08] mb-6">
            Engineered concepts ready for{" "}
            <span className="text-gradient">real-world deployment.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#a3adc8] leading-relaxed">
            Take a look at our foundational architecture patterns and design systems. We treat each project as a custom build with bespoke UI and solid code.
          </p>
        </div>
      </Container>

      <Portfolio />
      <ContactCTA />
    </div>
  );
}

