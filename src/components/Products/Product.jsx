import React from "react";
import cartSvg from "../../assets/cart.svg";
import { Link } from "react-router-dom";

const Product = ({ id, title, price, rating, image }) => {
  return (
    <div className=" w-[300px] hover:shadow-sm wrapper flex flex-col justify-center items-center max-w-xs rounded overflow-hidden shadow-lg sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <img className="w-32 h-42" src={image} alt="Product" />
      <div className="px-6 py-4">
        <Link to={`/product/${id}`}>
          <div className=" hover:underline hover:text-blue-600 font-bold text-xl mb-2 text-center">
            {title}
          </div>
        </Link>
      </div>

      <div className="container flex justify-around">
        <span>⭐ Rating:{rating.rate}</span>
        <span>Count:{rating.count}</span>
      </div>
      <div className="px-6 py-4 w-[100%] flex justify-between items-center ">
        <span className="font-bold text-xl ">${price}</span>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-full ">
          <img src={cartSvg} className="w-6  h-6 " />
        </button>
      </div>
    </div>
  );
};

export default Product;
