import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="font-extrabold text-transparent lg:text-8xl md:text-6xl sm:text-7xl   bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center pt-10">
            About
          </p>
        </div>
        <p className="text-l mt-4  max-h-screen">
          Having cultivated a keen eye for detail, I take pride in crafting
          visually appealing and responsive websites. However, my expertise
          extends beyond aesthetics – I possess a strong grasp of back-end
          development, allowing me to build robust and efficient server-side
          functionalities. What sets me apart is my unwavering commitment to
          refining my craft. I approach challenges with a solution-oriented
          mindset, leveraging my problem-solving skills to overcome obstacles
          and deliver optimal results.
        </p>
        <br />

        {/* <p>Quotes</p> */}
        <p className="text-l">
          "The only way to do great work is to love what you do." – Steve Jobs
          <br />
          "The journey of a thousand miles begins with one step." – Lao Tzu
          <br /> "In the midst of difficulty lies opportunity." – Albert
          Einstein <br /> "The expert in anything was once a beginner." – Helen
          Hayes
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
