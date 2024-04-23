import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartSvg from "../../assets/cart.svg";
import { useCart } from "../../cartContext";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartItems } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim().length) {
      onSearch(searchTerm.trim());
    }
    setSearchTerm("");
  };

  return (
    <div className="mt-36">
      <header className="fixed top-0 bg-white w-full header flex justify-between items-center p-4 md:p-8 border">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl md:text-3xl font-semibold hover:underline mr-6">
              E-commerce
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
        <div
          className={`md:hidden fixed top-0 left-0 w-2/4 h-full bg-white z-50 ${
            sidebarOpen
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-xl focus:outline-none"
          >
            ✕
          </button>
          <div className="flex flex-col items-center justify-center h-full">
            <Link
              to="/products"
              className="list-none hover:text-red-500 hover:cursor-pointer mb-4"
            >
              Products
            </Link>
            {/* Add other links here */}
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <form onSubmit={handleSubmit} className="flex items-center mr-4">
            <input
              className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2 w-36 md:w-auto focus:outline-none hover:shadow text-sm"
              type="text"
              name="search"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
            />
            <button
              type="submit"
              className="p-2 border rounded-md w-20 md:w-auto hover:shadow text-sm"
            >
              Search
            </button>
          </form>
        </div>
        <Link to="/cart" className="relative flex items-center">
          <img
            src={cartSvg}
            alt="cart"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
            style={{ width: "30px", height: "30px" }}
          />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 py-0.5 text-xs">
            {cartItems.length}
          </span>
        </Link>
      </header>
    </div>
  );
};

export default Header;
