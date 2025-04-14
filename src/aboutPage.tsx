import { ThemeProvider } from "./components/lib/theme-provider";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/aboutUs/components/hero";
import Began from "./components/aboutUs/components/began";
import WhatWeOffer from "./components/aboutUs/components/whatweoffer";

export const AboutPage = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Header />
        <Hero />
        <Began />
        <WhatWeOffer />
        <Footer />
      </main>
    </ThemeProvider>
  );
};
