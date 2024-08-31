import React from "react";

const ProductDescription = () => {
  return (
    <ul>
      <li>
        <h1 className="font-bold p-2 text-center text-xl text-slate-700">Most hergonomic handle ever made</h1>
        <div className="flex items-center justify-center ">
          <img src="assets/images/knife-handle.jpg" alt="" className="h-72 w-48 p-1" />
          <p className="text-xs text-justify p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur consequuntur tenetur autem sapiente
            doloremque voluptatem excepturi, reprerit, eligendi aliquam dicta aliquid earum at ut et atque a laborum.
            Doloribus commodi nam accusamus officiis aliquid deserunt hic magnam. Accusantium ullam unde perferendis
            debitis optio eius illo in, eveniet eum, illum laborum veniam doloremque repellat alias ipsum molestiae
            quibusdam!
          </p>
        </div>
      </li>
      <li>
        <h1 className="font-bold p-2 text-center text-xl text-slate-700">Long lasting sharp blade</h1>
        <div className="flex items-center justify-center">
          <p className="text-xs text-justify p-2">
            Lorem ipsum dolor sit amet consectetur elit. In pariatur consequuntur tenetur autem sapiente doloremque
            voluptatem excepturi, reprerit, eligendi aliquam dicta aliquid earum at ut et atque a laborum. officiis
            aliquid deserunt hic magnam. ullam unde debitis optio iusto eius illo in, eveniet eum, illum laborum veniam
            doloremque repellat alias ipsum molestiae quibusdam!
          </p>
          <img src="assets/images/knife-top.jpg" alt="" className="w-48 h-72 p-1" />
        </div>
      </li>
      <li>
        <h1 className="font-bold p-2 text-center text-xl text-slate-700">Made to cook anything</h1>
        <div className="flex items-center justify-center">
          <img src="assets/images/knife-salmon.jpg" alt="" className="w-48 h-72 p-1" />
          <p className="text-xs text-justify p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur consequuntur tenetur autem sapiente
            doloremque voluptatem dicta aliquid earum at ut et atque a laborum. Doloribus commodi nam accusamus officiis
            aliquid deserunt hic magnam. ullam unde perferendis debitis optio iusto voluptatibus eius illo in, eveniet
            eum, illum laborum veniam doloremque molestiae quibusdam!
          </p>
        </div>
      </li>
    </ul>
  );
};

export default ProductDescription;
