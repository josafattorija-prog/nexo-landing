import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import AllInOne from "@/components/all-in-one";
import Inbox from "@/components/inbox";
import AIFeatures from "@/components/ai-features";
import Market from "@/components/market";
import Modules from "@/components/modules";
import Comparativa from "@/components/comparativa";
import Pricing from "@/components/pricing";
import CTABand from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <ThemeProvider>
      <Nav />
      <main>
        <Hero />
        <AllInOne />
        <Inbox />
        <AIFeatures />
        <Market />
        <Modules />
        <Comparativa />
        <Pricing />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
