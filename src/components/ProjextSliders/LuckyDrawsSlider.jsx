import { Carousel } from "antd";
import luckydraw1 from "../../assets/projectimages/luckydraw1.png";
import luckydraw2 from "../../assets/projectimages/luckydraw2.png";
import luckydraw3 from "../../assets/projectimages/luckydraw3.png";
import luckydraw4 from "../../assets/projectimages/luckydraw4.png";

const LuckyDrawSlider = () => {
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
        {" "}
        <img
          src={luckydraw4}
          style={contentStyle}
          loading="lazy"
          alt="luckydraw4"
        ></img>
      </div>
      <div>
        <img
          src={luckydraw1}
          style={contentStyle}
          loading="lazy"
          alt="luckydraw1"
        ></img>
      </div>
      <div>
        <img
          src={luckydraw2}
          style={contentStyle}
          loading="lazy"
          alt="luckydraw2"
        ></img>
      </div>
      <div>
        <img
          src={luckydraw3}
          style={contentStyle}
          loading="lazy"
          alt="luckydraw3"
        ></img>
      </div>
    </Carousel>
  );
};

export default LuckyDrawSlider;
