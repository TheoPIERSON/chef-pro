import React from "react";

const ProductDescription = () => {
  return (
    <ul className="mt-2">
      <li>
        <h1 className="font-bold p-2 text-start text-3xl md:text-5xl text-slate-700 h-20 flex items-center">
          Most hergonomic handle ever made
        </h1>
        <div className="flex justify-center items-center">
          <img src="assets/images/knife-handle.jpg" alt="" className="h-72 md:h-1/2 md:w-1/3 w-1/2 p-1 rounded-3xl" />
          <p className="w-1/2 md:w-1/3 md:ml-20 text-xs md:text-3xl text-start p-2 h-64 flex items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur consequuntur tenetur autem sapiente
            doloremque voluptatem excepturi, reprerit, eligendi aliquam dicta aliquid earum at ut et atque a laborum.
            Doloribus commodi nam accusamus officiis aliquid deserunt hic magnam. Accusantium ullam unde perferendis
            debitis optio eius illo in, eveniet eum, illum laborum veniam doloremque repellat alias ipsum molestiae
            quibusdam!
          </p>
        </div>
      </li>
      <li>
        <h1 className="font-bold p-2 text-start text-3xl md:text-5xl text-slate-700 h-20 flex items-center">
          Long lasting sharp blade
        </h1>
        <div className="flex justify-center items-center">
          <p className="w-1/2 md:w-1/3 md:mr-20 text-xs md:text-3xl text-end p-2 h-64 flex items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur consequuntur tenetur autem sapiente
            doloremque voluptatem excepturi, reprerit, eligendi aliquam dicta aliquid earum at ut et atque a laborum.
            Doloribus commodi nam accusamus officiis aliquid deserunt hic magnam. Accusantium ullam unde perferendis
            debitis optio eius illo in, eveniet eum, illum laborum veniam doloremque repellat alias ipsum molestiae
            quibusdam!
          </p>
          <img src="assets/images/knife-top.jpg" alt="" className="h-72 md:h-1/2 md:w-1/3 w-1/2 p-1 rounded-3xl" />
        </div>
      </li>
      <li>
        <h1 className="font-bold p-2 text-start text-3xl md:text-5xl text-slate-700 h-20 flex items-center">
          Made to cook anything
        </h1>
        <div className="flex justify-center items-center">
          <img src="assets/images/knife-salmon.jpg" alt="" className="h-72 md:h-1/2 md:w-1/3 w-1/2 p-1 rounded-3xl" />
          <p className="w-1/2 md:w-1/3 md:ml-20 text-xs md:text-3xl text-start p-2 h-64  flex items-center">
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
