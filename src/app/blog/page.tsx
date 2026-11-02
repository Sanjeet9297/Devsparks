import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog & Insights — DevSparks",
  description:
    "Engineering insights, UI/UX architecture breakdowns, and tech thoughts from the DevSparks team.",
};

const articles = [
  {
    title: "Why Modern Next.js Applications Outperform Legacy SPA Frameworks",
    category: "Architecture",
    date: "October 2026",
    summary:
      "A deep dive into server components, static generation, streaming, and how zero-bundle-size React components transform web performance.",
  },
  {
    title: "Designing for Impact: Aesthetic Glassmorphism Without Sacrificing Performance",
    category: "Design Systems",
    date: "October 2026",
    summary:
      "How to implement hardware-accelerated CSS backdrops, neon glow dynamics, and accessible dark themes with high frame rates.",
  },
  {
    title: "Practical AI Integrations: From Hype to Reliable Utility",
    category: "Engineering",
    date: "September 2026",
    summary:
      "Concrete patterns for integrating LLMs and workflow automations into existing SaaS products without fragility.",
  },
];

export default function BlogPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="max-w-2xl mb-12">
          <span className="text-[#53f5dc] text-[11px] font-extrabold uppercase tracking-[2.1px] block mb-3">
            Articles & Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f7ff] tracking-tight leading-[1.1] mb-4">
            Studio notes and{" "}
            <span className="text-gradient">technical perspectives.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#a3adc8] leading-relaxed">
            Observations on building modern software, crafting interfaces, and scaling digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item, index) => (
            <article
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-[#101629] border border-white/[0.09] flex flex-col justify-between hover:border-[#53f5dc]/35 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#a3adc8] mb-4">
                  <span className="text-[#53f5dc] font-semibold">{item.category}</span>
                  <span>{item.date}</span>
                </div>
                <h2 className="font-heading text-lg font-bold text-[#f5f7ff] tracking-tight mb-3">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-[13px] text-[#a3adc8] leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#53f5dc] hover:text-[#9ef9e9] transition-colors"
              >
                Discuss this topic
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}

