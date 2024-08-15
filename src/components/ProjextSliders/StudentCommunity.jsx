import React from "react";
import { Carousel } from "antd";
import talkofcode1 from "../../assets/projectimages/talkofcode2.png";
import talkofcode2 from "../../assets/projectimages/talkofcode1.png";
import talkofcode3 from "../../assets/projectimages/talk3.png";
import talkofcode4 from "../../assets/projectimages/talk4.png";
import talkofcode5 from "../../assets/projectimages/talk5.png";

const StudentCommunity = () => {
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
          src={talkofcode1}
          style={contentStyle}
          loading="lazy"
          alt="talkofcode1"
        ></img>
      </div>
      <div>
        <img
          src={talkofcode4}
          style={contentStyle}
          loading="lazy"
          alt="talkofcode2"
        ></img>
      </div>
      <div>
        <img
          src={talkofcode5}
          style={contentStyle}
          loading="lazy"
          alt="talkofcode3"
        ></img>
      </div>
      <div>
        <img
          src={talkofcode2}
          style={contentStyle}
          loading="lazy"
          alt="talkofcode4"
        ></img>
      </div>
      <div>
        <img
          src={talkofcode3}
          style={contentStyle}
          loading="lazy"
          alt="talkofcode5"
        ></img>
      </div>
    </Carousel>
  );
};

export default StudentCommunity;
