import About from "./components/About";
import Contact from "./components/Contact";
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
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
