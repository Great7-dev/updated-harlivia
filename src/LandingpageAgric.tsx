import About from "./components/agric/components/About/about";
import FAQSection from "./components/agric/components/Faq/Faq";
import FooterSection from "./components/agric/components/Footer/footer";
import Hero from "./components/agric/components/Hero/hero";
import ValueProposition from "./components/agric/components/Value/value";
import Navbar from "./components/agric/components/Navbar/navbar";
import { ThemeProvider } from "./components/lib/theme-provider";

const LandingAgric = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Navbar />
        <Hero />
        <About />
        <ValueProposition />
        <FAQSection />
        <FooterSection />
      </div>
    </ThemeProvider>
  );
};

export default LandingAgric;
