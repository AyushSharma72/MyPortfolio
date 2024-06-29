import React from "react";
import { Carousel } from "antd";
import talkofcode1 from "../../assets/projectimages/talkofcode2.png";
import talkofcode2 from "../../assets/projectimages/talkofcode1.png";
import talkofcode3 from "../../assets/projectimages/talk3.png";
import talkofcode4 from "../../assets/projectimages/talk4.png";
import talkofcode5 from "../../assets/projectimages/talk5.png";

const StudentCommunity = () => {
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
        <img src={talkofcode1} style={contentStyle}></img>
      </div>
      <div>
        <img src={talkofcode4} style={contentStyle}></img>
      </div>
      <div>
        <img src={talkofcode5} style={contentStyle}></img>
      </div>
      <div>
        <img src={talkofcode2} style={contentStyle}></img>
      </div>
      <div>
        <img src={talkofcode3} style={contentStyle}></img>
      </div>
    </Carousel>
  );
};

export default StudentCommunity;
