import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — DevSparks",
  description: "DevSparks privacy policy and data protection guidelines.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="max-w-3xl prose prose-invert">
          <span className="text-[#53f5dc] text-[11px] font-extrabold uppercase tracking-[2.1px] block mb-3">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#f5f7ff] tracking-tight mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-sm text-[#a3adc8] leading-relaxed">
            <p>
              Last updated: October 2026. DevSparks values your privacy and is
              committed to transparent handling of information.
            </p>

            <h2 className="font-heading text-lg font-bold text-[#f5f7ff] pt-4">
              1. Information We Collect
            </h2>
            <p>
              When you submit an inquiry through our contact form, we collect the
              name, email address, selected service category, and project notes you
              provide. We do not sell or rent this information to third parties.
            </p>

            <h2 className="font-heading text-lg font-bold text-[#f5f7ff] pt-4">
              2. How We Use Information
            </h2>
            <p>
              We use your submitted details solely to review project requirements,
              prepare estimates, and communicate directly with you regarding your
              inquiry.
            </p>

            <h2 className="font-heading text-lg font-bold text-[#f5f7ff] pt-4">
              3. Analytics & Cookies
            </h2>
            <p>
              Our website uses minimal, privacy-friendly analytics to assess traffic
              and improve usability. No invasive cross-site tracking or profiling is
              conducted.
            </p>

            <h2 className="font-heading text-lg font-bold text-[#f5f7ff] pt-4">
              4. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please email us
              at{" "}
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

