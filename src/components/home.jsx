import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PositionPoint } from "@react-three/drei";
import { Avatar } from "./avatar";
const Home = () => {
  return (
    <div className="h-screen w-[76%] flex m-auto mt-[7rem]" id="home">
      {/* herosectiontext */}
      <div className="flex flex-col gap-y-6 mt-20 ">
        <p className="text-xl  text-white font-medium tracking-wide">
          Hi, I'm Ayush Sharma
        </p>
        <p className="text-5xl text-white font-bold tracking-normal">
          <span className="bluegradient"> Full-Stack </span>
          Website Developer.
        </p>

        <p className="text-lg  graycolor w-2/3">
          I am passionate Full-Stack Developer. With a strong foundation in both
          front-end and back-end technologies.
        </p>
        <div>
          <button className="getintouch p-2 mt-5">
            <span>Get in Touch</span>
          </button>
        </div>
      </div>
      <div className="h-full">
        <Canvas shadows>
          <group position-y={-1} rotation={[Math.PI / 9, 0, 0]}>
            <Avatar scale={[2.1, 2, 2]} />
          </group>
          <OrbitControls></OrbitControls>
          <ambientLight intensity={2}></ambientLight>
        </Canvas>
      </div>
    </div>
  );
};

export default Home;
