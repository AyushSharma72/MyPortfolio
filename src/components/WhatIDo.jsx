import React from "react";
import BackendAnimation from "../animations/backendanimation";
import FrontendAnimation from "../animations/frontendanimation";
import UiuxAnimation from "../animations/uiux.animation";
const WhatIDo = () => {
  return (
    <div className="flex flex-col justify-center items-center " id="Whatido">
      <p className="text-3xl text-white font-bold mt-3 ">
        What I <span className="bluegradient"> Do?</span>
      </p>

      {/* animation div */}

      <div className="flex items-center md:justify-around flex-col  md:flex-row flex-wrap gap-y-5 gap-x-5 w-full pb-14 pt-10">
        {/* backend */}

        <div className=" flex flex-col p-2 w-[280px] sm:w-[300px] gap-y-2 cardborder   duration-300">
          <BackendAnimation />
          <p className="font-bold text-xl text-center bluegradient">
            Back-end Development
          </p>
          <hr></hr>
          <p className="text-center font-semibold text-white">
            I specialize in creating robust and scalable server-side
            applications using Node.js and Express. With a focus on efficiency
            and security, seamless data management and API integration.
          </p>
        </div>

        {/* frontend */}

        <div className=" flex flex-col p-2 w-[280px] sm:w-[300px]  gap-y-2  cardborder duration-300">
          <FrontendAnimation />
          <p className="font-bold text-xl text-center bluegradient">
            Front-end Development
          </p>
          <hr></hr>
          <p className="text-center font-semibold text-white">
            I craft visually appealing and responsive web interfaces using HTML,
            CSS, and React.js. My aim is to deliver user-friendly experiences
            that are both functional and aesthetically pleasing.
          </p>
        </div>

        {/* UIUX */}

        <div className=" flex flex-col p-2 w-[280px] sm:w-[300px] gap-y-2  cardborder duration-300">
          <UiuxAnimation />
          <p className="font-bold text-xl text-center bluegradient">
            Ux Design
          </p>
          <hr></hr>
          <p className="text-center font-semibold text-white">
            I design intuitive and engaging user experiences that prioritize
            ease of use and accessibility. By focusing on user needs, I create
            interfaces that are both enjoyable and efficient to navigate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
