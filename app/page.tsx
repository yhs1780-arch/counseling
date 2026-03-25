import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Credentials } from "@/components/sections/Credentials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { LlmAssist } from "@/components/sections/LlmAssist";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { Services } from "@/components/sections/Services";
import { TrustBar } from "@/components/sections/TrustBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Pricing />
        <Credentials />
        <Process />
        <LlmAssist />
        <Reviews />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
