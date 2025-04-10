import { ThemeProvider } from "./components/lib/theme-provider";
import Header from "./components/header";
import TermOfUse from "./components/termOfUse";

export const TermPage = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main>
        <Header />
        <TermOfUse />
      </main>
    </ThemeProvider>
  );
};
