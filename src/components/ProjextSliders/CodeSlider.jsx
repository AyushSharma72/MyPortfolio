import React from "react";
import { Carousel } from "antd";
import code from "../../assets/projectimages/codecompiler.png";
import code2 from "../../assets/projectimages/codecompiler2.png";

const CodeSlider = () => {
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
        <img src={code} style={contentStyle} loading="lazy" alt="code1"></img>
      </div>
      <div>
        <img src={code2} style={contentStyle} loading="lazy" alt="code2"></img>
      </div>
    </Carousel>
  );
};

export default CodeSlider;
