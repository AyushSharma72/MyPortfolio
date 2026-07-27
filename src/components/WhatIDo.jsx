import React, { Suspense } from "react";
const BackendAnimation = React.lazy(
  () => import("../animations/backendanimation")
);
const FrontendAnimation = React.lazy(
  () => import("../animations/frontendanimation")
);

const UiuxAnimation = React.lazy(() => import("../animations/uiux.animation"));

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
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            {" "}
            <BackendAnimation />
          </Suspense>

          <p className="font-bold text-xl text-center bluegradient">
            Back-end Development
          </p>
          <hr></hr>
          <p className="text-center  text-white">
            I build secure REST APIs with Node.js and Express, using JWT
            authentication, Joi validation, and MongoDB/MySQL — owning features
            end-to-end from API design to deployment.
          </p>
        </div>

        {/* frontend */}

        <div className=" flex flex-col p-2 w-[280px] sm:w-[300px]  gap-y-2  cardborder duration-300">
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            {" "}
            <FrontendAnimation />
          </Suspense>

          <p className="font-bold text-xl text-center bluegradient">
            Front-end Development
          </p>
          <hr></hr>
          <p className="text-center  text-white">
            I craft high-performance React and Next.js interfaces with Tailwind
            CSS — SEO-optimized, multilingual routing, and Lighthouse scores
            95+ across production client platforms.
          </p>
        </div>

        {/* DevOps */}

        <div className=" flex flex-col p-2 w-[280px] sm:w-[300px] gap-y-2  cardborder duration-300">
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <UiuxAnimation />
          </Suspense>

          <p className="font-bold text-xl text-center bluegradient">
            Cloud & DevOps
          </p>
          <hr></hr>
          <p className="text-center  text-white">
            I automate CI/CD with GitHub Actions, containerize with Docker, and
            deploy via Nginx on DigitalOcean — cutting deployment time and
            shipping shared services like AWS SES email workflows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
