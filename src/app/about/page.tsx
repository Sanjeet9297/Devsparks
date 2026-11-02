import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import AboutPreview from "@/components/home/AboutPreview";
import Technologies from "@/components/home/Technologies";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "About Us — DevSparks",
  description:
    "Learn about DevSparks: an independent digital studio focused on thoughtful design, reliable engineering, and long-term product growth.",
};

export default function AboutPage() {
  return (
    <div className="pt-8 pb-16">
      <Container className="mb-12">
        <div className="max-w-3xl">
          <span className="text-[#53f5dc] text-[11px] font-extrabold uppercase tracking-[2.1px] block mb-3">
            Our Studio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f5f7ff] tracking-tight leading-[1.08] mb-6">
            Building digital tools with{" "}
            <span className="text-gradient">craft and clarity.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#a3adc8] leading-relaxed">
            DevSparks was founded to bridge the gap between creative design and
            bulletproof engineering. We work closely with founders, startups, and
            teams to bring ideas to reality without unnecessary clutter.
          </p>
        </div>
      </Container>

      <AboutPreview />
      <Technologies />
      <ContactCTA />
    </div>
  );
}

