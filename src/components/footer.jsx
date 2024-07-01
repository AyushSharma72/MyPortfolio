import React from "react";
import { PiGitForkBold } from "react-icons/pi";
const Footer = () => {
  return (
    <div id="footer" className=" pt-10  pb-5 ">
      <div className=" xl:w-1/2 flex m-auto justify-around gap-x-3">
        <div className="flex flex-col items-center gap-y-2 flex-wrap">
          <p className="text-center text-white font-bold text-2xl">
            Designed and developed by <br></br>{" "}
            <span className="bluegradient">Ayush Sharma</span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-2 flex-wrap">
          <p className="text-center text-white font-bold text-2xl">
            Help me to improve <br></br>{" "}
            <span className="bluegradient flex flex-col gap-y-1 sm:flex-row sm:gap-x-2 items-center">
              Fork this repo{" "}
              <a
                href="https://github.com/AyushSharma72/MyPortfolio.git"
                target="blank"
              >
                <PiGitForkBold className=" bg-white text-black text-2xl rounded-sm" />
              </a>
            </span>
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
