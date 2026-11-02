import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center max-w-[760px] mx-auto" : "max-w-[700px]",
        className
      )}
    >
      {kicker && (
        <span className="inline-block text-[#53f5dc] text-[11px] font-extrabold uppercase tracking-[2.2px] mb-3">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f7ff] leading-[1.12] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#a3adc8] text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

