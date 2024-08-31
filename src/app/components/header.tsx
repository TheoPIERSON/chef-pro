import React from "react";

const Header = () => {
  return (
    <div className="h-screen overflow-hidden">
      <video
        src="/assets/video/knife.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-[-1]"
      ></video>
      <div className="grid items-center h-full">
        <div className="grid items-center h-1/2 mt-10">
          <h2 className="text-white text-center transform text-1xl md:text-5xl lg:text-6xl">
            Discover the <span className="font-bold">ultimate</span> modern chef tool
          </h2>
          <h1 className="text-white text-center text-8xl md:text-5xl lg:text-6xl font-bold drop-shadow-ld p-2">
            Chef Pro 360
          </h1>
        </div>
        <div className="grid items-center h-1/2">
          <button
            className="text-slate-700 text-center text-2xl md:text-4xl lg:text-5xl drop-shadow-ld bg-white p-4 inline-block mx-auto rounded-xl duration-300
          hover:text-white hover:bg-slate-700"
          >
            Register
          </button>
          <h3 className="text-white text-center top-2/3 text-2xl md:text-5xl lg:text-6xl drop-shadow-ld">
            to be on the waiting list
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
