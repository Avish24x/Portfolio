import About from "./components/About";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PortFolio from "./components/PortFolio";
import SocialLinks from "./components/SocialLinks";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   const threeScript = document.createElement("script");
  //   threeScript.setAttribute("id", "threeScript");
  //   threeScript.setAttribute(
  //     "src",
  //     "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/three.min.js"
  //   );
  //   console.log(
  //     document.getElementsByTagName("head")[0].appendChild(threeScript);
  //     return ()=>{
  //       if (threeScript){
  //         threeScript.remove();
  //       }
  //     }
  //   );
  // }, []);
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
