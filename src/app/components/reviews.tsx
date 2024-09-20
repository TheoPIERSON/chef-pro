import React from "react";

const Reviews = () => {
  return (
    <div className="mt-20 grid">
      <div className="grid md:flex w-full">
        {" "}
        <img src="assets/images/chef-1.jpg" className="md:w-1/5 md:m-10 p-8 md:p-4 rounded-full" />
        <div className="grid md:flex flex-col justify-center md:justify-end p-4 h-64 ">
          <h2 className="md:mb-8 text-lg font-bold text-center md:text-start">Franck Chouquette</h2>
          <p className="text-center md:text-start md:w-1/2">
            The Chef Pro 360 is a true gem. Its sharpness is impeccable, and its grip is perfect for precise cuts.
            Whether slicing vegetables or carving meat, this knife accompanies me in all my culinary creations. An
            essential tool for any chef.
          </p>
        </div>
      </div>
      <div className="grid md:flex w-full justify-end">
        {" "}
        <img src="assets/images/chef-2.jpg" className="md:hidden md:w-1/5 md:m-10 p-8 md:p-4 rounded-full" />
        <div className="grid md:flex flex-col justify-end md:justify-end p-4 h-64">
          <h2 className="md:mb-8 text-lg font-bold text-center md:text-end">Ben Phong</h2>
          <p className="text-center md:text-end md:w-1/2 md:ml-auto">
            The Chef Pro 360 impressed me with its precision and lightness. It allows me to quickly cut delicate Thai
            ingredients like fresh herbs or seafood. A versatile and reliable knife that adapts to all my kitchen needs.
          </p>
        </div>{" "}
        <img src="assets/images/chef-2.jpg" className="hidden md:block md:w-1/5 md:m-10 p-8 md:p-4 rounded-full" />
      </div>
      <div className="grid md:flex w-full">
        {" "}
        <img src="assets/images/chef-3.jpg" className="md:w-1/5 md:m-10 p-8 md:p-4 rounded-full" />
        <div className="grid md:flex flex-col justify-center md:justify-end p-4 h-64">
          <h2 className="md:mb-8 text-lg font-bold text-center md:text-start">Sarah Tatouille</h2>
          <p className="text-center md:text-start md:w-1/2">
            The Chef Pro 360 has revolutionized my work in pastry. Its thin, precise blade is perfect for slicing
            delicate fruits and creating refined decorations. It’s a knife that’s as elegant as it is effective,
            indispensable for flawless finishes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
