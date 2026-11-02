import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import Technologies from "@/components/home/Technologies";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutPreview />
      <Services />
      <Portfolio />
      <Process />
      <Technologies />
      <FAQ />
      <ContactCTA />
    </div>
  );
}
