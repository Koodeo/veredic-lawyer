import { siteConfig } from "@/lib/config";
import Hero from "@/components/sections/hero";
import Marquee from "@/components/sections/marquee";
import Stats from "@/components/sections/stats";
import Services from "@/components/sections/services";
import Manifesto from "@/components/sections/manifesto";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import Clients from "@/components/sections/clients";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee items={siteConfig.marquee} />
      <Stats />
      <Services />
      <Manifesto />
      <Team />
      <Testimonials />
      <Clients />
      <Contact />
    </main>
  );
}