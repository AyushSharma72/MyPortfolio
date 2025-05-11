import React from "react";
import { Carousel } from "antd";
import skilltrade1 from "../../assets/projectimages/skilltrade1.jpg";
import skilltrade2 from "../../assets/projectimages/skilltrade2.jpg";
import skilltrade3 from "../../assets/projectimages/skilltrade3.jpg";
import skilltrade4 from "../../assets/projectimages/skilltrade4.jpg";
import skilltrade5 from "../../assets/projectimages/skilltrade5.jpg";
import skilltrade6 from "../../assets/projectimages/skilltrade6.jpg";

const QuizSlider = () => {
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
        <img src={skilltrade1} style={contentStyle} loading="lazy" alt="skilltrade"></img>
      </div>
      <div>
        <img src={skilltrade2} style={contentStyle} loading="lazy" alt="skilltrade"></img>
      </div>{" "}
      <div>
        <img src={skilltrade3} style={contentStyle} loading="lazy" alt="skilltrade"></img>
      </div>{" "}
      <div>
        <img src={skilltrade4} style={contentStyle} loading="lazy" alt="skilltrade"></img>
      </div>{" "}
      <div>
        <img src={skilltrade5} style={contentStyle} loading="lazy" alt="skilltrade"></img>
      </div>
      <div>
        <img src={skilltrade6} style={contentStyle} loading="lazy" alt="skilltrade"></img>
      </div>
    </Carousel>
  );
};

export default QuizSlider;
