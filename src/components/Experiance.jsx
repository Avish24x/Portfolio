import React from "react";

// importing experiance images
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import next from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Ruby from "../assets/xuby.png";
import Bootstrap from "../assets/Bootstrap.png";
import jQuery from "../assets/einn.png";
import SQL from "../assets/sql-removebg-preview.png";
import java from "../assets/Java-removebg-preview.png";
import node from "../assets/node.png";
import figma from "../assets/Figma-removebg-preview.png";

const Experiance = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    // CSS
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-sky-500",
    },
    // JavaScript
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    // REACT JS
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-500",
    },
    // NEXTJS
    {
      id: 5,
      src: next,
      title: "NextJs",
      style: "shadow-gray-100",
    },

    // RUBY ON RAILS
    {
      id: 6,
      src: Ruby,
      title: "Ruby On Rails",
      style: "shadow-red-500",
    },
    // GITHUB
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    // TAILWIND
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-200",
    },
    // BOOTSTRAP
    {
      id: 9,
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 10,
      src: jQuery,
      title: "JQuery",
      style: "shadow-green-500",
    },
    // MYSQL
    {
      id: 11,
      src: SQL,
      title: "SQL",
      style: "shadow-orange-200",
    },
    // JAVA
    {
      id: 12,
      src: java,
      title: "Java",
      style: "shadow-pink-300",
    },
    {
      id: 13,
      src: node,
      title: "NodeJs",
      style: "shadow-green-700",
    },
    {
      id: 14,
      src: figma,
      title: "Figma",
      style: "shadow-green-700",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {/* Experience */}
        <div>
          <p className="font-extrabold text-transparent lg:text-8xl md:text-6xl sm:text-7xl   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center ">
            Experience
          </p>
          <p className="flex items-center justify-center py-6">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="html image" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
          {/* HTML, CSS & Javascript */}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
