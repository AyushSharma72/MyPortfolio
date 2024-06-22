import React, { useEffect } from "react";
const Header = () => {
  useEffect(() => {
    const checkActivePage = () => {
      if (window.location.hash === "") {
        return;
      }
      const page = window.location.hash;
      document.querySelectorAll(".navbar a").forEach((activePage) => {
        if (activePage.href.includes(page)) {
          activePage.classList.add("active");
        } else {
          activePage.classList.remove("active");
        }
      });
    };

    window.addEventListener("hashchange", checkActivePage);

    checkActivePage();
    return () => {
      window.removeEventListener("hashchange", checkActivePage);
    };
  }, []);
  return (
    <div className="h-14 flex justify-around items-center navbar ">
      <div className="w-1/4">
        {/* <img  src=''></img> */}
        Ayush Sharma
      </div>
      <div className="w-1/2 flex justify-around font-bold">
        <a href="#home">Home</a>
        <a href="#about">About me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact me</a>
      </div>
    </div>
  );
};

export default Header;
