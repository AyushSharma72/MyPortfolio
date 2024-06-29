import React from "react";
import { Carousel } from "antd";
import resume from "../../assets/projectimages/Resume.png";
import resume2 from "../../assets/projectimages/resume1.png";
import resume3 from "../../assets/projectimages/resume2.png";

const ResumeSlider = () => {
  const contentStyle = {
    margin: 0,
    height: "160px",
    borderRadius: "5px",
    lineHeight: "160px",
    textAlign: "center",
  };
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <Carousel {...settings}>
      <div>
        <img src={resume} style={contentStyle}></img>
      </div>

      <div>
        <img src={resume2} style={contentStyle}></img>
      </div>
      <div>
        <img src={resume3} style={contentStyle}></img>
      </div>
    </Carousel>
  );
};

export default ResumeSlider;
