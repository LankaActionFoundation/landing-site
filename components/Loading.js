import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const Loading = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets4.lottiefiles.com/packages/lf20_vue2na9x.json"
      style={{ height: "250px", width: "250px" }}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
    // <div className="relative w-32 h-32">
    //   <div className="loader">
    //     <div className="loader-inner">
    //       <div className="loader-line-wrap">
    //         <div className="loader-line"></div>
    //       </div>
    //       <div className="loader-line-wrap">
    //         <div className="loader-line"></div>
    //       </div>
    //       <div className="loader-line-wrap">
    //         <div className="loader-line"></div>
    //       </div>
    //       <div className="loader-line-wrap">
    //         <div className="loader-line"></div>
    //       </div>
    //       <div className="loader-line-wrap">
    //         <div className="loader-line"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Loading;
