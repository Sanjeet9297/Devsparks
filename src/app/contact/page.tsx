import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactCTA from "@/components/home/ContactCTA";
import FAQ from "@/components/home/FAQ";

export const metadata: Metadata = {
  title: "Contact DevSparks — Start a Project",
  description:
    "Get in touch with DevSparks to discuss your web, mobile, AI, or software development project.",
};

export default function ContactPage() {
  return (
    <div className="pt-8 pb-16">
      <Container className="mb-6">
        <div className="max-w-2xl">
          <span className="text-[#53f5dc] text-[11px] font-extrabold uppercase tracking-[2.1px] block mb-3">
            Get in touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f7ff] tracking-tight leading-[1.1] mb-4">
            Let&apos;s build something{" "}
            <span className="text-gradient">remarkable together.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#a3adc8] leading-relaxed">
            Fill out the form below or email us directly. We respond to all inquiries with honest technical feedback and project scopes.
          </p>
        </div>
      </Container>

      <ContactCTA />
      <FAQ />
    </div>
  );
}

