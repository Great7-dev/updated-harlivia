import Footer from "../footer";
import Header from "../header";
import { ThemeProvider } from "../lib/theme-provider";
import Hero from "./Hero/hero";
import TabSection from "./tab/tab-section";

const Blogmain = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Header />
        <Hero />
        <TabSection />
        <div className=" mt-20">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Blogmain;
