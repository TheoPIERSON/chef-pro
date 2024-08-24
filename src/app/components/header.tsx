import React from "react";

const Header = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        src="/assets/video/knife.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
      ></video>

      <h1 className="relative text-white text-center top-1/2 transform -translate-y-1/2 text-4xl md:text-5xl lg:text-6xl font-bold">
        Chef Pro 360
      </h1>
    </div>
  );
};

export default Header;
