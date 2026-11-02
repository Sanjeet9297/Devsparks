import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service — DevSparks",
  description: "DevSparks terms of service and client collaboration agreement.",
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="max-w-3xl prose prose-invert">
          <span className="text-[#53f5dc] text-[11px] font-extrabold uppercase tracking-[2.1px] block mb-3">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#f5f7ff] tracking-tight mb-8">
            Terms of Service
          </h1>

          <div className="space-y-6 text-sm text-[#a3adc8] leading-relaxed">
            <p>
              Last updated: October 2026. By accessing and using the DevSparks
              website or initiating a project with us, you agree to the following
              terms.
            </p>

            <h2 className="font-heading text-lg font-bold text-[#f5f7ff] pt-4">
              1. Project Scopes & Agreements
            </h2>
            <p>
              All software development, UI/UX design, and consulting engagements
              are executed under explicit statements of work defining milestones,
              deliverables, timelines, and payment terms.
            </p>

            <h2 className="font-heading text-lg font-bold text-[#f5f7ff] pt-4">
              2. Intellectual Property
            </h2>
            <p>
              Upon final settlement of project fees, client deliverables and bespoke
              source code developed specifically for the client are assigned to the
              client, subject to individual contract stipulations.
            </p>

            <h2 className="font-heading text-lg font-bold text-[#f5f7ff] pt-4">
              3. Limitation of Liability
            </h2>
            <p>
              DevSparks provides technology design and advisory services to the
              highest professional standards. In no event shall DevSparks be liable
              for indirect or consequential damages beyond standard contractual
              agreements.
            </p>

            <h2 className="font-heading text-lg font-bold text-[#f5f7ff] pt-4">
              4. Inquiries
            </h2>
            <p>
              For legal inquiries regarding contracts or terms, contact{" "}
              <a
                href="mailto:hello@devsparks.in"
                className="text-[#53f5dc] underline"
              >
                hello@devsparks.in
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

