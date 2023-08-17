import About from "./components/About";
import Experiance from "./components/Experiance";
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
      <SocialLinks />
    </div>
  );
}

export default App;
