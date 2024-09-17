import React from "react";

const ProductDescription = () => {
  return (
    <section id="product-description">
      <ul className="md:flex">
        <li className="mt-1 relative group">
          <div className="relative">
            <img src="assets/images/knife-handle.jpg" alt="" className="h-screen w-screen" />
            <h1 className="absolute top-0 left-0 font-bold p-2 text-start text-6xl text-slate-200">
              Most ergonomic handle ever made
            </h1>
            {/* Paragraphe caché avec une transition d'apparition par le bas */}
            <p className="drop-shadow-md w-full text-xl text-left p-4 absolute bottom-0 text-slate-200 bg-slate-600/50 md:opacity-0 md:translate-y-1/3 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              The ChefPro 360’s handle is designed for maximum comfort and precision. Its ergonomic shape fits naturally
              in your hand, reducing fatigue during extended use, while providing superior grip and control.
            </p>
          </div>
        </li>
        <li className="mt-1 relative group">
          <div className="relative">
            <img src="assets/images/knife-top.jpg" alt="" className="h-screen w-screen" />
            <h1 className="absolute top-0 left-0 font-bold p-2 text-start text-6xl text-slate-200">
              Long lasting sharp blade
            </h1>
            {/* Paragraphe caché avec une transition d'apparition par le bas */}
            <p className="drop-shadow-md w-full text-xl text-left p-4 absolute bottom-0 text-slate-200 bg-slate-600/75 md:opacity-0 md:translate-y-1/3 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              The ChefPro 360’s blade is crafted from high-quality stainless steel, ensuring long-lasting durability and
              resistance to wear. Its razor-sharp edge stays sharp through extended use, offering precision cuts every
              time.
            </p>
          </div>
        </li>
        <li className="mt-1 relative group">
          <div className="relative">
            <img src="assets/images/knife-salmon.jpg" alt="" className="h-screen w-screen" />
            <h1 className="absolute top-0 left-0 font-bold p-2 text-start text-6xl text-slate-200">
              Made to cook anything
            </h1>
            {/* Paragraphe caché avec une transition d'apparition par le bas */}
            <p className="drop-shadow-md w-full text-xl text-left p-4 absolute bottom-0 text-slate-200 bg-slate-600/50 md:opacity-0 md:translate-y-1/3 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              The ChefPro 360 is your all-in-one kitchen tool, expertly designed to slice through all types of
              ingredients—from delicate herbs to tough meats. Its versatile design makes it perfect for any culinary
              task.
            </p>
          </div>
        </li>
      </ul>{" "}
      <div className="hidden md:block w-full h-14 bg-white absolute"></div>
    </section>
  );
};

export default ProductDescription;
