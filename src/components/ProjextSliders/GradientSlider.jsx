import React from "react";
import npm from "../../assets/projectimages/npm.png";
import colordra from "../../assets/projectimages/gradient.png";
import gradientimges from "../../assets/projectimages/graimages.png";
import { Carousel } from "antd";
const GradientSlider = () => {
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
        <img src={npm} style={contentStyle} loading="lazy" alt="npm"></img>
      </div>
      <div>
        <img src={colordra} style={contentStyle} loading="lazy" alt="colordra"></img>
      </div>
      <div>
        <img src={gradientimges} style={contentStyle} loading="lazy" alt="gradientimages"></img>
      </div>
    </Carousel>
  );
};

export default React.memo(GradientSlider);
