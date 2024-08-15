import React from "react";
import { Carousel } from "antd";
import resume from "../../assets/projectimages/Resume.png";
import resume2 from "../../assets/projectimages/resume1.png";
import resume3 from "../../assets/projectimages/resume2.png";

const ResumeSlider = () => {
  const contentStyle = {
    borderRadius: "5px",
    objectFit: "cover",
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
        <img
          src={resume}
          style={contentStyle}
          loading="lazy"
          alt="resume"
        ></img>
      </div>

      <div>
        <img
          src={resume2}
          style={contentStyle}
          loading="lazy"
          alt="resume2"
        ></img>
      </div>
      <div>
        <img
          src={resume3}
          style={contentStyle}
          loading="lazy"
          alt="resume3"
        ></img>
      </div>
    </Carousel>
  );
};

export default ResumeSlider;
