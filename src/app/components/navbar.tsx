import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-transparent text-white ">
      <ul className="w-full p-2  bg-transparent flex justify-evenly fixed">
        <li className="drop-shadow-ld p-3 duration-300 hover:bg-slate-700">Shop</li>
        <li className="drop-shadow-ld p-3 duration-300 hover:bg-slate-700">Chef Pro 360</li>
        <li className="drop-shadow-ld p-3 duration-300 hover:bg-slate-700">Contact us</li>
      </ul>
    </div>
  );
};

export default Navbar;
