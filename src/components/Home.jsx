import React from "react";
import profileImage from "../assets/profile.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import StarfieldAnimation from "react-starfield-animation"; // Import the StarfieldAnimation component
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 relative" // Add "relative" class
    >
      {/* Add the StarfieldAnimation component */}
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        numParticles={1500}
        particleSpeed={0}
        dx={0.000000011}
        dy={0.000000111}
        starColor="rgba(226, 31, 255, 0.1)" // Change the color here (e.g., white with 70% opacity)
      />

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        {/* Header */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="group text-xl sm:text-7xl font-bold text-white mt-14  md:mb-0 mr-2">
            I'm a Full Stack
            <span
              className=" bg-gradient-to-r bg-clip-text  text-transparent 
            from-purple-400 via-pink-600 to-purple-950
            animate-text ml-2"
            >
              Developer
            </span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            I'm fascinated by the power of an idea to change the world! I enjoy
            programming since it allows me to communicate my interests. Over the
            last few years, I've been studying Software Development. College,
            front-end classes, and projects have come to light some incredible
            ability inside me. "Mind-created visions created to bring a bliss
            realm to the fingertips and hearts of the world.I have a strong
            passion for learning new technologies and exploring innovative
            solutions. My goal is to contribute to meaningful projects that make
            a positive impact on people's lives."
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 cursor-pointer"
            >
              Portfolio
              <span className="px-2 group-hover:rotate-90 duration-300">
                <BsFillArrowRightCircleFill size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
        <div className="md:w-1/2 lg:w-1/3 xl:w-full z-10">
          <img
            src={profileImage}
            alt="myprofile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
