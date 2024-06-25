import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./avatar";

const Home = () => {
  return (
    <div
      className=" h-[630px] w-[100%] px-3 sm:w-[76%] flex m-auto md:mt-[7rem] mt-[5rem] gap-x-2 sm:gap-0"
      id="home"
    >
      {/* herosectiontext */}
      <div className="flex flex-col gap-y-6 sm:mt-20 mt-[3rem] w-[65%] ">
        <p className="text-xl  text-white font-medium tracking-wide">
          Hi, I'm Ayush Sharma
        </p>
        <p className="text-5xl text-white font-bold tracking-normal">
          <span className="bluegradient"> Full-Stack </span>
          Web Developer.
        </p>

        <p className="text-lg  graycolor  sm:w-[90%] lg:w-2/3">
          I am passionate Full-Stack Developer. With a strong foundation in both
          front-end and back-end technologies.
        </p>
        <div>
          <button className="getintouch p-2 mt-5">
            <span>Get in Touch</span>
          </button>
        </div>
      </div>
      <div className="sm:h-full sm:w-[35%] sm:mt-0 h-3/4 mt-[3rem]  w-[30%] ">
        <Canvas shadows>
          <group position-y={-1} rotation={[Math.PI / 9, 0, 0]}>
            <Avatar scale={[2.3, 2, 2]} />
          </group>
          {/* <OrbitControls></OrbitControls> */}
          <ambientLight intensity={2}></ambientLight>
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
