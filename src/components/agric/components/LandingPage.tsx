import Navbar from "./Navbar/navbar";
import Hero from "./Hero/hero";
import About from "./About/about";
import Faq from "./Faq/Faq";
import Footer from "./Footer/footer";
import ValueProposition from "./Value/value";
import { ThemeProvider } from "../../lib/theme-provider";

const LandingPageAgric = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Navbar />
        <Hero />
        <About />
        <ValueProposition />
        <Faq />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default LandingPageAgric;
