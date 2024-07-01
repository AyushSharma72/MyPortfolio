import React from "react";
import { Carousel } from "antd";
import code from "../../assets/projectimages/codecompiler.png";
import code2 from "../../assets/projectimages/codecompiler2.png";

const CodeSlider = () => {
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
        <img src={code} style={contentStyle} loading="lazy"></img>
      </div>
      <div>
        <img src={code2} style={contentStyle} loading="lazy"></img>
      </div>
    </Carousel>
  );
};

export default CodeSlider;
