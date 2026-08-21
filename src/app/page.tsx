import { About } from "@/components/about";
import { Approach } from "@/components/approach";
import { ContactForm } from "@/components/contact-form";
import { Flagship } from "@/components/flagship";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { WhatWeDo } from "@/components/what-we-do";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col">
      <Hero />
      <WhatWeDo />
      <Process />
      <Approach />
      <Flagship />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}
