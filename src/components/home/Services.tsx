import React from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Sparkles,
  Terminal,
  ShoppingBag,
  Layers,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { servicesData } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5 text-[#53f5dc]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[#7886ff]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#bd8cff]" />,
  Terminal: <Terminal className="w-5 h-5 text-[#53f5dc]" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#7886ff]" />,
  Layers: <Layers className="w-5 h-5 text-[#53f5dc]" />,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <Container>
        <SectionHeading
          kicker="What we do"
          title={
            <>
              Everything you need to
              <br />
              <span className="text-gradient">build what&apos;s next.</span>
            </>
          }
          subtitle="From first concept to launch and beyond, get the right digital capabilities for your next move."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative p-7 rounded-2xl bg-gradient-to-br from-[#141b30]/85 to-[#0c1120]/90 [html.light_&]:from-white [html.light_&]:to-white [html.light_&]:shadow-lg [html.light_&]:shadow-slate-200/50 border border-white/[0.09] [html.light_&]:border-slate-200/90 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#53f5dc]/40 [html.light_&]:hover:border-teal-500/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4),0_0_20px_rgba(83,245,220,0.1)] [html.light_&]:hover:shadow-xl overflow-hidden flex flex-col justify-between"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#7886ff]/15 [html.light_&]:bg-indigo-500/10 blur-2xl group-hover:bg-[#53f5dc]/25 [html.light_&]:group-hover:bg-teal-500/15 transition-colors duration-300 pointer-events-none" />

              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7886ff]/20 to-[#53f5dc]/15 [html.light_&]:from-slate-100 [html.light_&]:to-slate-100 border border-white/[0.1] [html.light_&]:border-slate-200 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105">
                  {iconMap[service.iconName] || <Globe className="w-5 h-5 text-[#53f5dc]" />}
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#f5f7ff] [html.light_&]:text-[#0f172a] tracking-tight mb-2.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#a3adc8] [html.light_&]:text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Link */}
              <Link
                href={service.ctaHref}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#53f5dc] [html.light_&]:text-teal-600 transition-all duration-200 group-hover:text-[#9ef9e9] [html.light_&]:group-hover:text-teal-700"
              >
                <span>{service.ctaText}</span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
