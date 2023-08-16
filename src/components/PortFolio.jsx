import React from "react";

// importing images from assets>portfolio.
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/arrayDestruct.jpg";
import navbar from "../assets/portfolio/arrayDestruct.jpg";
import reactParallax from "../assets/portfolio/arrayDestruct.jpg";
import reactSmooth from "../assets/portfolio/arrayDestruct.jpg";
import reactWeather from "../assets/portfolio/arrayDestruct.jpg";

const PortFolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="font-extrabold text-transparent lg:text-8xl md:text-6xl sm:text-7xl   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={reactWeather}
              alt="projects"
              className="rounded-md duration-200 hover:scale-105"
            />
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
