import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <a href="/home">
          <h1 className="text-5xl font-Brand capitalize ml-2">Milesh</h1>
        </a>
      </div>

      {/* Hamburger menu */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 hover:text-white pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Desktop navigation */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile navigation */}
      {nav && (
        <ul className="flex flex-col justify-center items-center md:hidden absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl text-black"
            >
              <Link
                to={link}
                smooth
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
                onClick={() => setNav(false)} // Close the menu after clicking a link
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
