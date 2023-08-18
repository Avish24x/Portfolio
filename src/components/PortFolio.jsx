import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

// importing images from assets>portfolio.
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/arrayDestruct.jpg";
import navbar from "../assets/portfolio/arrayDestruct.jpg";
import reactParallax from "../assets/portfolio/arrayDestruct.jpg";
import reactSmooth from "../assets/portfolio/arrayDestruct.jpg";
import reactWeather from "../assets/portfolio/arrayDestruct.jpg";

const PortFolio = () => {
  // this is to display the array of projects images
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demoLink: "",
      codeLink: "",
    },
    {
      id: 2,
      src: arrayDestruct,
      demoLink: "",
      codeLink: "",
    },
    {
      id: 3,
      src: arrayDestruct,
      demoLink: "",
      codeLink: "",
    },
    {
      id: 4,
      src: arrayDestruct,
      demoLink: "",
      codeLink: "",
    },
    {
      id: 5,
      src: arrayDestruct,
      demoLink: "",
      codeLink: "",
    },
    {
      id: 6,
      src: arrayDestruct,
      demoLink: "",
      codeLink: "",
    },
  ];
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
          <p className="py-6 flex items-center justify-center">
            Check out some of my work here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 items-center justify-center">
          {/* looping throught the array of portfolios */}
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              {/* container for the demo and code button */}
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-3 duration-200 hover:scale-105 flex items-center  
                  text-white
                  hover:text-purple-400 to-pink-600"
                >
                  <span className="mr-2">
                    <AiOutlineEye size={25} />
                  </span>
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-3 duration-200 hover:scale-105 flex items-center
                 text-white
                 hover:text-purple-400 to-pink-600"
                >
                  <span className="mr-2">
                    <AiFillGithub size={25} />
                  </span>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
