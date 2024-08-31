import React from "react";

const ProductDescription = () => {
  return (
    <ul className="md:flex w-full justify-around mt-2">
      <li>
        <h1 className="font-bold p-2 text-center text-3xl text-slate-700 h-20 flex items-center justify-center">
          Most hergonomic handle ever made
        </h1>
        <div className="flex md:grid items-center justify-center ">
          <img src="assets/images/knife-handle.jpg" alt="" className="h-72 md:h-auto w-48 md:w-full p-1" />
          <p className="text-xs md:text-lg text-justify p-2 h-64">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur consequuntur tenetur autem sapiente
            doloremque voluptatem excepturi, reprerit, eligendi aliquam dicta aliquid earum at ut et atque a laborum.
            Doloribus commodi nam accusamus officiis aliquid deserunt hic magnam. Accusantium ullam unde perferendis
            debitis optio eius illo in, eveniet eum, illum laborum veniam doloremque repellat alias ipsum molestiae
            quibusdam!
          </p>
        </div>
      </li>
      <li>
        <h1 className="font-bold p-2 text-center text-3xl text-slate-700 h-20 flex items-center justify-center">
          Long lasting sharp blade
        </h1>
        <div className="flex md:grid items-center justify-center">
          <p className="text-xs md:text-lg text-justify p-2  h-64 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur consequuntur tenetur autem sapiente
            doloremque voluptatem excepturi, reprerit, eligendi aliquam dicta aliquid earum at ut et atque a laborum.
            Doloribus commodi nam accusamus officiis aliquid deserunt hic magnam. Accusantium ullam unde perferendis
            debitis optio eius illo in, eveniet eum, illum laborum veniam doloremque repellat alias ipsum molestiae
            quibusdam!
          </p>
          <img src="assets/images/knife-top.jpg" alt="" className="h-72 md:h-auto w-48 md:w-full p-1" />
        </div>
      </li>
      <li>
        <h1 className="font-bold p-2 text-center text-3xl text-slate-700 h-20 flex items-center justify-center">
          Made to cook anything
        </h1>
        <div className="flex md:grid  items-center justify-center">
          <img src="assets/images/knife-salmon.jpg" alt="" className="h-72 md:h-auto w-48 md:w-full p-1" />
          <p className="text-xs md:text-lg text-justify p-2  h-64">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur consequuntur tenetur autem sapiente
            doloremque voluptatem excepturi, reprerit, eligendi aliquam dicta aliquid earum at ut et atque a laborum.
            Doloribus commodi nam accusamus officiis aliquid deserunt hic magnam. Accusantium ullam unde perferendis
            debitis optio eius illo in, eveniet eum, illum laborum veniam doloremque repellat alias ipsum molestiae
            quibusdam!
          </p>
        </div>
      </li>
    </ul>
  );
};

export default ProductDescription;
