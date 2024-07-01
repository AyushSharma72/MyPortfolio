import React from "react";
import { Canvas } from "@react-three/fiber";
import reactimg from "../assets/skillslogo/reactimg.svg";
import nodeimg from "../assets/skillslogo/nodejs.svg";
import mongo from "../assets/skillslogo/mongodb.svg";
import expressimg from "../assets/skillslogo/express.png";
import javascript from "../assets/skillslogo/javascript.svg";
import css from "../assets/skillslogo/css3.svg";
import postman from "../assets/skillslogo/getpostman-icon.svg";
import git from "../assets/skillslogo/giticon.svg";
import java from "../assets/skillslogo/java.svg";
import tailwind from "../assets/skillslogo/tailwind.svg";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
const SittingAvatar = React.lazy(() => import("./sittingavatar"));
import { Html } from "@react-three/drei";
import { PulseLoader } from "react-spinners";

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
    positionY = -0.5; // Default position for screens > 600px
  }
  return (
    <div
      className="flex flex-col items-center h-[600px] sm:h-screen "
      id="skills"
    >
      <p className="text-3xl text-white font-bold mt-5">
        My{" "}
        <span
          className="bluegradient
      "
        >
          Skills
        </span>
      </p>

      <div className="relative w-full flex items-center sm:h-full h-[500px] overflow-hidden">
        <Canvas shadows className="floatinganimation">
          <Suspense
            fallback={
              <Html center>
                <div className="flex text-white font-bold gap-3 items-center">
                  Loading
                  <PulseLoader
                    color="#FFFFFF"
                    size={10}
                    speedMultiplier={0.8}
                  />
                </div>
              </Html>
            }
          >
            <group position-y={positionY} rotation={[0, -Math.PI / 20, 0]}>
              <SittingAvatar scale={[2.5, 2.5, 2.5]} />
            </group>
          </Suspense>

          <ambientLight intensity={2}></ambientLight>
        </Canvas>

        <img src={reactimg} className="w-[3rem] image1 " loading="lazy"></img>
        <img src={nodeimg} className="w-[3rem] image2" loading="lazy"></img>
        <img
          src={mongo}
          className="w-[3rem] image3 bg-white"
          loading="lazy"
        ></img>
        <img src={expressimg} className="w-[4rem] image4" loading="lazy"></img>
        <img src={javascript} className="w-[3rem] image5" loading="lazy"></img>
        <img src={css} className="w-[3rem] image6" loading="lazy"></img>
        <img src={postman} className="w-[3rem] image7" loading="lazy"></img>
        <img src={git} className="w-[3rem] image8" loading="lazy"></img>
        <img src={java} className="w-[3rem] image9" loading="lazy"></img>
        <img src={tailwind} className="w-[3rem] image10" loading="lazy"></img>
      </div>
    </div>
  );
};

export default Skills;
