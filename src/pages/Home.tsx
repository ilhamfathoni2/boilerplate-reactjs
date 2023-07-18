import { HeroSection } from "../components/home/Hero";
import { Cta } from "../components/home/Cta";
import { Footer } from "../components/footer/footer";

import { Navbar } from "../components/navbar/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cta />
      <Footer />
    </>
  );
}

export default HomePage;
