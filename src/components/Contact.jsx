import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800  p-4 text-white"
    >
      <div
        className="
h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
"
      >
        <div>
          <p>Contact</p>
          <p>Submit the form below to get in touch with me</p>
        </div>

        <div>
          <form action="">
            <input
              type="text"
              name="name"
              id=""
              placeholder="enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              id=""
              placeholder="enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-6 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
