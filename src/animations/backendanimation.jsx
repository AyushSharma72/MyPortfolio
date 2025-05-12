import React, { useMemo } from "react";

import Lottie from "react-lottie";
import animationData from "../assets/animations/backend.json";

const BackendAnimation = () => {
  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }),
    []
  );

  return <Lottie options={defaultOptions} height={150} width={200} />;
};

export default React.memo(BackendAnimation);
