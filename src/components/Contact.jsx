import React from "react";
import mushroomTest from "../assets/mushroomform-removebg-preview.png";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800  p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="font-extrabold text-transparent lg:text-8xl md:text-6xl sm:text-7xl   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center">
            Contact
          </p>
          <p className="py-6 flex items-center justify-center">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div
          className="flex justify-center items-center    h-screen
     w-full bg-gray-400 rounded-md    bg-opacity-10 "
        >
          <div className="hidden md:block md:w-1/2">
            <img
              src={mushroomTest}
              alt="Mushroom"
              className="w-full h-full pb-20 object-cover"
            />
          </div>
          <form
            action="https://getform.io/f/d4617733-2db0-4f7c-b3f9-2cedd42710f7"
            method="POST"
            className="flex flex-col w-full md:w-1/2 px-4 lg:mr-10 lg:pt-10 lg:pb-0 sm:px-10"
          >
            <input
              type="text"
              name="name"
              id=""
              placeholder="enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none   px-4 sm:px-4"
            />
            <input
              type="text"
              name="email"
              id=""
              placeholder="enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none sm:px-4"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              id=""
              cols="30"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none sm:px-4"
            ></textarea>

            <button
              className="text-white bg-gradient-to-r   
            from-purple-400 via-pink-600 to-purple-950
            animate-text px-9 py-4 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
