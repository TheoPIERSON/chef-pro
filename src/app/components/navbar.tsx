import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-transparent text-white ">
      <ul className="w-full p-2  bg-transparent flex justify-evenly fixed">
        <li className="drop-shadow-ld p-3 duration-300 hover:bg-slate-700">
          <a href="https://theo-pierson.vercel.app/">Shop</a>
        </li>
        <li className="drop-shadow-ld p-3 duration-300 hover:bg-slate-700">
          <a href="#product-description">Chef Pro 360</a>
        </li>
        <li className="drop-shadow-ld p-3 duration-300 hover:bg-slate-700">
          <a href="#footer">Contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
