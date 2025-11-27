import { HeroSection } from "./Components/Hero";
import { FeaturesSection } from "./Components/Features";
import { TestimonialsSection } from "./Components/Testimonials";
import { PricingSection } from "./Components/Pricing";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </>
  );
}
