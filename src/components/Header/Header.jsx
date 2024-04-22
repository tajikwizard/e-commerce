// Header.jsx - Adjusted handleSubmit function to pass the search term to the onSearch prop
import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartSvg from "../../assets/cart.svg";
import {useCart} from '../../cartContext.jsx';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim().length) {
      onSearch(searchTerm.trim()); // Pass the search term to the onSearch prop
    }
    setSearchTerm("");
  };

  return (
    <div className="">
      <header className="header flex flex-col md:flex-row justify-between p-4 md:p-8 border items-center">
        <div className="logoContainer">
          <Link to="/">
            <h1 className="text-2xl md:text-3xl font-semibold hover:underline">
              E-commerce
            </h1>
          </Link>
        </div>
        <div className="navigation mt-2 text-xl">
          <Link
            to="/products"
            className="list-none hover:text-red-500 hover:cursor-pointer"
          >
            Products
          </Link>
        </div>
        <div className="formContainer flex flex-col md:flex-row items-center mt-4 md:mt-0 ">
          <form onSubmit={handleSubmit}>
            {" "}
            {/* Use form tag to handle form submission */}
            <input
              className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2 w-full md:w-auto focus:outline-none hover:shadow"
              type="text"
              name="search"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search product..."
            />
            <button
              type="submit" // Change type to submit to trigger handleSubmit on button click
              className="p-2 border rounded-md w-full md:w-auto hover:shadow"
            >
              Search
            </button>
          </form>
        </div>

        <Link to="/cart" className="relative mt-4 md:mt-0">
          <img
            src={cartSvg}
            alt="cart"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
            style={{ width: "50px", height: "50px" }}
          />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {cartItems}
          </span>
        </Link>
      </header>
    </div>
  );
};
export default Header;
