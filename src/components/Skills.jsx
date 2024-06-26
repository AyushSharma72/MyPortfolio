import React from "react";
import { SittingAvatar } from "./sittingavatar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Skills = () => {
  return (
    <div className="flex flex-col items-center mt-3">
      <p className="text-3xl text-white font-bold ">Skills</p>

      <div className="h-[600px] floatinganimation ">
        <Canvas shadows>
          <group position-y={-1} rotation={[0, 0, 0]}>
            <SittingAvatar scale={[2.5, 2.5, 1.5]} />
          </group>
          {/* <OrbitControls></OrbitControls> */}
          <ambientLight intensity={2}></ambientLight>
        </Canvas>
      </div>
    </div>
  );
};

export default Skills;
