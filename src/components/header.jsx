import React, { useEffect } from "react";
const Header = () => {
  return (
    <div className=" flex justify-between items-center navbar w-[80%] mt-3 py-2 fixed top-0 left-0 right-0 mx-auto">
      <div className="w-3/4 flex items-center justify-around">
        <div className=" text-3xl font-bold text-white">
          {/* <img  src=''></img> */}
          Ayush <span className="bluegradient">Sharma</span>
        </div>
        <div className="w-[60%] flex justify-around font-bold">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact me</a>
        </div>
      </div>
      <div className="mr-5">
        <button class="download-btn pixel-corners">
          <div class="button-content">
            <div class="svg-container">
              <svg
                class="download-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"></path>
              </svg>
            </div>
            <div class="text-container ">
              <div class="text-white font-bold">View Resume</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
