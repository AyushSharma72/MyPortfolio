import React from "react";
import { Carousel } from "antd";
import quiz from "../../assets/projectimages/quiz.png";
import quiz2 from "../../assets/projectimages/quiz2.png";

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
        <img src={quiz} style={contentStyle} loading="lazy" alt="quiz"></img>
      </div>

      <div>
        <img src={quiz2} style={contentStyle} loading="lazy" alt="quiz2"></img>
      </div>
    </Carousel>
  );
};

export default QuizSlider;
