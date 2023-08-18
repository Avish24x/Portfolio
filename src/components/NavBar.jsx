import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  // using state to flip burger to list menu
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
    // container for page logo
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed ">
      <div>
        {/* Page logo */}
        <h1 className="text-5xl font-Brand capitalize ml-2 ">Milesh</h1>
      </div>

      <ul className=" hidden md:flex">
        {/* map each items on the navbar in the array defined on top  */}

        {/* array deconstruct to provide better code readability */}
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

      {/* ending of the portfolio navigations links  */}

      {/* container for the burgermenu */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 hover:text-white pr-4 z-10 md:hidden"
      >
        {/* this is to toggle faTimes and FaBars accordingly when clicking */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl text-black"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
