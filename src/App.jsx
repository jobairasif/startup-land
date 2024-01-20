import "./App.css";
import NavigationBar from "./components/NavigationBar";
import SponsoredBy from "./sections/SponsoredBy";
import Support from "./sections/Support";
import HeroSection from "./sections/HeroSection";
import PremiumFeatures from "./sections/PremiumFeatures";

function App() {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <SponsoredBy />
      <Support />
      <PremiumFeatures/>
    </>
  );
}

export default App;
