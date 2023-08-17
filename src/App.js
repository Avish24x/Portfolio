import About from "./components/About";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PortFolio from "./components/PortFolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <PortFolio />
      <Experiance />
      {/* <Footer /> */}
      <SocialLinks />
    </div>
  );
}

export default App;
