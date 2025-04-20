import "./App.css";
import { ThemeProvider } from "./components/lib/theme-provider";
import FAQSection from "./components/properties/components/Faq/faq-section";
import Features from "./components/properties/components/Features/Features";
import ValueProposition from "./components/properties/components/Features/SecondFeatures";
import FooterSection from "./components/properties/components/Footer/Footer";
import Hero from "./components/properties/components/Hero/Hero";
import Header from "./components/properties/components/Navbar/Header";

export default function LandingProperties() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Header />
        <Hero />
        <Features />
        <ValueProposition />
        <FAQSection />
        <FooterSection />
      </main>
    </ThemeProvider>
  );
}
