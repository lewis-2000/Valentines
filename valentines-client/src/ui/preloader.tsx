import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../public/preloader3.json";

const LottiePreloader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default LottiePreloader;
