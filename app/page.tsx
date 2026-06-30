import Hero from "@/components/hero";
import AllInOne from "@/components/all-in-one";
import Inbox from "@/components/inbox";
import AIFeatures from "@/components/ai-features";
import Pricing from "@/components/pricing";
import CTABand from "@/components/cta";
import QuickContact from "@/components/quick-contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AllInOne />
      <Inbox />
      <AIFeatures preview />
      <CTABand />
      <QuickContact />
    </>
  );
}
