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
import docker from "../assets/skillslogo/docker.svg";
import Next from "../assets/skillslogo/nextjs.svg";
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

  

 const positionY = React.useMemo(() => {
   if (isSmallScreen) return 0;
   if (isMediumScreen) return -0.5;
   return -0.5;
 }, [isSmallScreen, isMediumScreen]);

 // skill icons 
const skillIcons = [
  { src: reactimg, className: "image1", alt: "react" },
  { src: nodeimg, className: "image2", alt: "node" },
  { src: mongo, className: "image3 bg-white", alt: "mongo" },
  { src: expressimg, className: "image4", alt: "express" },
  { src: javascript, className: "image5", alt: "javascript" },
  { src: css, className: "image6", alt: "css" },
  { src: postman, className: "image7", alt: "postman" },
  { src: git, className: "image8", alt: "git" },
  { src: java, className: "image9", alt: "java" },
  { src: tailwind, className: "image10", alt: "tailwind" },
  { src: docker, className: "image11", alt: "docker" },
  { src: Next, className: "image12 bg-white p-1", alt: "next" },
];

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
        {skillIcons.map(({ src, className, alt }, i) => (
          <img
            key={i}
            src={src}
            className={`w-[3rem] ${className}`}
            loading="lazy"
            alt={alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
