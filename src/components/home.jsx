import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { FaCircleChevronDown } from "react-icons/fa6";
import { Html } from "@react-three/drei";
import { PulseLoader } from "react-spinners";

const Avatar = React.lazy(() => import("./avatar"));

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <div id="home">
      <div className="min-h-[560px] sm:h-[650px] w-[100%] px-3 sm:w-[76%] flex m-auto mt-[4.7rem] gap-x-2 sm:gap-0 pb-8 sm:pb-0">
        <div className="flex flex-col gap-y-4 sm:gap-y-6 sm:mt-20 mt-[3rem] w-[65%] md:mt-[7rem]">
          <p className="text-lg sm:text-xl text-white font-medium tracking-wide">
            Hi, I'm Ayush
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-normal leading-tight">
            <span className="bluegradient">Full Stack</span> Engineer
          </p>
          <p className="text-sm sm:text-base md:text-lg graycolor sm:w-[90%] lg:w-2/3">
            Full Stack Engineer and open source developer with 1+ year of
            experience building React frontends and Node.js/Express backends for
            production client platforms. Skilled in high-performance,
            SEO-optimized interfaces, multilingual routing, and REST APIs with
            JWT authentication — owning features end-to-end with clean,
            maintainable code.
          </p>
          <div>
            <button
              className="getintouch p-2 mt-3 sm:mt-5"
              onClick={() => scrollToSection("contact")}
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
        <div className="sm:h-full sm:w-[35%] sm:mt-0 h-[220px] mt-[3rem] w-[35%] min-w-[110px]">
          <Canvas shadows>
            <ambientLight intensity={1.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
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
              <group position-y={-1} rotation={[Math.PI / 9, 0, 0]}>
                <Avatar scale={[2.3, 2, 2.3]} />
              </group>
            </Suspense>
          </Canvas>
        </div>
        <FaCircleChevronDown
          className="text-white animatescrollbutton scrbtn text-3xl"
          onClick={() => scrollToSection("Whatido")}
        />
      </div>
    </div>
  );
};

export default Home;
