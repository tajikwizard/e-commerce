import React from "react";
import cartSvg from "../../assets/cart.svg";

const Product = () => {
  return (
    <div className=" hover:cursor-pointer hover:shadow-sm wrapper flex flex-col justify-center items-center max-w-xs rounded overflow-hidden shadow-lg sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <img
        className="w-full"
        src="https://via.placeholder.com/300"
        alt="Product"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Product Name</div>
      </div>
      <div className="px-6 py-4 w-[100%] flex justify-between items-center ">
        <span className="font-bold text-xl ">$150</span>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-full ">
          <img src={cartSvg} className="w-6  h-6 " />
        </button>
      </div>
    </div>
  );
};

export default Product;
