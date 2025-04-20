import React from "react";
import "./App.css";
import Header from "./components/header";
import { ThemeProvider } from "./components/lib/theme-provider";
import BentoGrid from "./components/bento-grid";
import FAQSection from "./components/faq";
import FeaturesGrid from "./components/features-grid";
import Footer from "./components/footer";
import ServiceCarousel from "./components/service-carousel";
import Whoweare from "./components/whoweare";
import HeroSection from "./components/hero";

const Landingpage = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <Header />
        <HeroSection />
        <ServiceCarousel />
        <Whoweare />
        <BentoGrid />
        <FeaturesGrid />
        <FAQSection />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Landingpage;
