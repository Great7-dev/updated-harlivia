import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./Landingpage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LandingAgric from "./LandingpageAgric";
import LandingCargo from "./LandingpageCargo";
import LandingProperties from "./LandingpageProperties";
import LandingEnergy from "./LandingpageEnergy";
import { PolicyPage } from "./PolicyPage";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top when route changes
    }, [pathname]);

    return null;
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/agric" element={<LandingAgric />} />
          <Route path="/cargo" element={<LandingCargo />} />
          <Route path="/properties" element={<LandingProperties />} />
          <Route path="/energy" element={<LandingEnergy />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
