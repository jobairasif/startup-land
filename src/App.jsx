import "./App.css";
import NavigationBar from "./components/NavigationBar";
import SponsoredBy from "./sections/SponsoredBy";
import Support from "./sections/Support";
import HeroSection from "./sections/HeroSection";

function App() {
  return (
    <>
      <NavigationBar /> 
      <HeroSection />
      <SponsoredBy/>
      <Support/>
    </>
  );
}

export default App;
