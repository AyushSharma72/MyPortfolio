import React from "react";
import crosscanals from "../../assets/projectimages/crosscanals.png";

const CrossCanalsSlider = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-md bg-gradient-to-br from-[#1a1a2e] to-[#16213e] py-8 px-4 min-h-[160px]">
      <img
        src={crosscanals}
        alt="CrossCanals"
        className="w-16 h-16 rounded-xl object-contain"
        loading="lazy"
      />
      <p className="text-white font-semibold text-lg tracking-wide">
        CrossCanals
      </p>
      <p className="text-gray-400 text-sm">B2B E-commerce Platform</p>
    </div>
  );
};

export default React.memo(CrossCanalsSlider);
