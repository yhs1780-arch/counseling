import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Credentials } from "@/components/sections/Credentials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { Services } from "@/components/sections/Services";
import { TrustBar } from "@/components/sections/TrustBar";
import { TrustSignals } from "@/components/sections/TrustSignals";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <TrustSignals />
        <About />
        <Services />
        <Pricing />
        <Credentials />
        <Process />
        <ReviewsSection />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
