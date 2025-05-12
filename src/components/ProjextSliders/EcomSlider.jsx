import React from "react";
import { Carousel } from "antd";
import Ecom from "../../assets/projectimages/Ecom.png";
import Ecom1 from "../../assets/projectimages/Ecom1.png";
import Ecom2 from "../../assets/projectimages/Ecom2.png";
import Ecom3 from "../../assets/projectimages/Ecom3.png";

const EcomSlider = () => {
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
        <img src={Ecom} style={contentStyle} loading="lazy" alt="Ecom"></img>
      </div>
      <div>
        <img src={Ecom1} style={contentStyle} loading="lazy" alt="Ecom1"></img>
      </div>
      <div>
        <img src={Ecom2} style={contentStyle} loading="lazy" alt="Ecom2"></img>
      </div>
      <div>
        {" "}
        <img src={Ecom3} style={contentStyle} loading="lazy" alt="Ecom"></img>
      </div>
    </Carousel>
  );
};

export default React.memo(EcomSlider);
