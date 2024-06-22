import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PositionPoint } from "@react-three/drei";
import { Avatar } from "./avatar";
const Home = () => {
  return (
    <div className="h-screen" id="home">
      <Canvas shadows>
        <group position-y={-1} rotation={[Math.PI / 9, 0, 0]}>
          <Avatar scale={[2, 2, 2]} />
        </group>
        {/* <OrbitControls></OrbitControls> */}
        <ambientLight intensity={1.5}></ambientLight>
      </Canvas>
    </div>
  );
};

export default Home;
