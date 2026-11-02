import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevSparks — Digital ideas, built to move",
  description:
    "DevSparks builds modern websites, mobile apps, AI-powered tools and custom digital products for ambitious businesses.",
  keywords: [
    "DevSparks",
    "Digital Studio",
    "Web Development",
    "Mobile Apps",
    "AI Automation",
    "Custom Software",
    "React",
    "Next.js",
  ],
  authors: [{ name: "DevSparks Team" }],
  openGraph: {
    title: "DevSparks — Digital ideas, built to move",
    description:
      "We turn ambitious ideas into useful digital experiences — from fast, beautiful websites to mobile apps and intelligent software.",
    url: "https://devsparks.in",
    siteName: "DevSparks",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080b16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#080b16] text-[#f5f7ff] antialiased selection:bg-[#53f5dc] selection:text-[#080b16]">
        <div className="topline-glow w-full shrink-0" />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
