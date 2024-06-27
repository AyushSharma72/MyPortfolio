import React, { useEffect, useState } from "react";
import { SittingAvatar } from "./sittingavatar";
import { Canvas } from "@react-three/fiber";
import reactimg from "../assets/reactimg.svg";
import nodeimg from "../assets/nodejs.svg";
import mongo from "../assets/mongodb.svg";
import expressimg from "../assets/express.png";
import javascript from "../assets/javascript.svg";
import css from "../assets/css3.svg";
import postman from "../assets/getpostman-icon.svg";
import git from "../assets/giticon.svg";
import java from "../assets/java.svg";
import { useMediaQuery } from "react-responsive";

const Skills = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 400px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 401px) and (max-width: 600px)",
  });

  let positionY;
  if (isSmallScreen) {
    positionY = 0; // Position for screens <= 400px
  } else if (isMediumScreen) {
    positionY = -0.5; // Position for screens between 401px and 600px
  } else {
    positionY = -0.5  ; // Default position for screens > 600px
  }
  return (
    <div className="flex flex-col items-center mt-3 h-screen " id="skills">
      <p className="text-3xl text-white font-bold ">Skills</p>

      <div className="relative w-full flex items-center sm:h-full h-[500px] overflow-hidden">
        <Canvas shadows className="floatinganimation">
          <group position-y={positionY} rotation={[0, -Math.PI / 20, 0]}>
            <SittingAvatar scale={[2.5, 2.5, 2.5]} />
          </group>

          <ambientLight intensity={2}></ambientLight>
        </Canvas>

        <img src={reactimg} className="w-[3rem] image1 "></img>
        <img src={nodeimg} className="w-[3rem] image2"></img>
        <img src={mongo} className="w-[3rem] image3 bg-white"></img>
        <img src={expressimg} className="w-[4rem] image4"></img>
        <img src={javascript} className="w-[3rem] image5"></img>
        <img src={css} className="w-[3rem] image6"></img>
        <img src={postman} className="w-[3rem] image7"></img>
        <img src={git} className="w-[3rem] image8"></img>
        <img src={java} className="w-[3rem] image9"></img>
      </div>
    </div>
  );
};

export default Skills;
