import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "nav";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#53f5dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b16] select-none cursor-pointer";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs gap-1.5",
    md: "px-4.5 py-2.5 text-xs sm:text-sm gap-2",
    lg: "px-6 py-3.5 text-sm sm:text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#53f5dc] text-[#071018] font-bold border border-[#53f5dc] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(83,245,220,0.22)] active:translate-y-0",
    secondary:
      "bg-white/[0.04] text-[#f5f7ff] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.2] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-transparent text-[#53f5dc] border border-[#53f5dc]/40 hover:bg-[#53f5dc]/10 hover:border-[#53f5dc] hover:-translate-y-0.5 active:translate-y-0",
    nav: "bg-gradient-to-r from-[#53f5dc] to-[#9ef9e9] text-[#071018] font-bold border-0 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(83,245,220,0.25)] active:translate-y-0",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon}
    </button>
  );
}

