import React from "react";
import npm from "../../assets/projectimages/npm.png";
import colordra from "../../assets/projectimages/gradient.png";
import gradientimges from "../../assets/projectimages/graimages.png";
import { Carousel } from "antd";
const GradientSlider = () => {
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
        <img src={npm} style={contentStyle} loading="lazy"></img>
      </div>
      <div>
        <img src={colordra} style={contentStyle} loading="lazy"></img>
      </div>
      <div>
        <img src={gradientimges} style={contentStyle} loading="lazy"></img>
      </div>
    </Carousel>
  );
};

export default GradientSlider;
