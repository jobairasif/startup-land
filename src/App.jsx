import "./App.css";
import NavigationBar from "./components/NavigationBar";
import SponsoredBy from "./components/SponsoredBy";
import HeroSection from "./sections/HeroSection";

function App() {
  return (
    <>
      <NavigationBar /> 
      <HeroSection />
      <SponsoredBy/>
    </>
  );
}

export default App;
