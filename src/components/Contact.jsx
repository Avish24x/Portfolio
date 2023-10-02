import React, { useState } from "react";
import mushroomTest from "../assets/mushroomform-removebg-preview.png";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://getform.io/f/d4617733-2db0-4f7c-b3f9-2cedd42710f7",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        setIsModalOpen(true);
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800  p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="font-extrabold text-transparent lg:text-8xl md:text-6xl sm:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center">
            Contact
          </p>
          <p className="py-6 flex items-center justify-center">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center h-screen w-full bg-gray-400 rounded-md bg-opacity-10">
          <div className="hidden md:block md:w-1/2">
            <img
              src={mushroomTest}
              alt="Mushroom"
              className="w-full h-full pb-20 object-cover"
            />
          </div>
          <form
            className="flex flex-col w-full md:w-1/2 px-4 lg:mr-10 lg:pt-10 lg:pb-0 sm:px-10"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none px-4 sm:px-4"
            />
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none sm:px-4"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none sm:px-4"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-purple-400 via-pink-600 to-purple-950
            animate-text px-9 py-4 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="bg-black p-6 rounded-md shadow-md flex flex-col items-center">
            <p className="text-xl font-semibold mb-2">Thank You!</p>
            <p>Your message has been submitted.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-600 text-white rounded-md hover:scale-105 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
