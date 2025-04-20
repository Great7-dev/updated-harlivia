import "./App.css";
import BusinessSolutions from "./components/energy/components/business-solutions";
import FAQSection from "./components/energy/components/Faq/faq-section";
import FooterSection from "./components/energy/components/Footer/footer";
import Hero from "./components/energy/components/Hero/hero";
import Header from "./components/energy/components/Navbar/header";
import OilAndGasSection from "./components/energy/components/oil-and-gas";
import SolarEnergySection from "./components/energy/components/solar-energy";
import { ThemeProvider } from "./components/lib/theme-provider";

function LandingEnergy() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <Header />
        <Hero />
        <OilAndGasSection />
        <SolarEnergySection />
        <BusinessSolutions />
        <FAQSection />
        <FooterSection />
      </>
    </ThemeProvider>
  );
}

export default LandingEnergy;
