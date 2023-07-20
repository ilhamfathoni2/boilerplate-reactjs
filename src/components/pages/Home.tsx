import { HeroSection } from "../home/Hero";
import { Cta } from "../home/Cta";
import { Footer } from "../footer/footer";

import { Navbar } from "../navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cta />
      <Footer />
    </>
  );
}
