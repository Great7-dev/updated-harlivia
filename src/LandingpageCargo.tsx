import "./App.css";
import FAQSection from "./components/cargo/components/Faq/faq";
import Features from "./components/cargo/components/features";
import FooterSection from "./components/cargo/components/Footer/footer";
import Hero from "./components/cargo/components/Hero/hero";
import Header from "./components/cargo/components/Navbar/header";
import ValueProposition from "./components/cargo/components/valueprop";
import { ThemeProvider } from "./components/lib/theme-provider";

export default function LandingCargo() {
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
