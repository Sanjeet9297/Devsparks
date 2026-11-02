import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Services — DevSparks",
  description:
    "Explore our complete range of digital services: Web Development, Mobile Apps, AI & Automation, Custom APIs, E-Commerce, and SaaS MVPs.",
};

export default function ServicesPage() {
  return (
    <div className="pt-8 pb-16">
      <Container className="mb-12">
        <div className="max-w-3xl">
          <span className="text-[#53f5dc] text-[11px] font-extrabold uppercase tracking-[2.1px] block mb-3">
            Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#f5f7ff] tracking-tight leading-[1.08] mb-6">
            Comprehensive services for{" "}
            <span className="text-gradient">modern digital products.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#a3adc8] leading-relaxed">
            From initial wireframing to high-performance web applications and automated AI workflows, we deliver full-cycle software development tailored to your objectives.
          </p>
        </div>
      </Container>

      <Services />
      <Process />
      <ContactCTA />
    </div>
  );
}

