import { Link } from "react-router-dom";
import cartSvg from "../../assets/cart.svg";

const Header = () => {
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

        <div className="formContainer flex flex-col md:flex-row items-center mt-4 md:mt-0 ">
          <input
            className="p-2 border rounded-md mb-2 md:mb-0 md:mr-2 w-full md:w-auto focus:outline-none hover:shadow"
            type="text"
            name="search"
            id="search"
            placeholder="Search product..."
          />
          <button
            className="p-2 border rounded-md w-full md:w-auto hover:shadow"
            type="button"
          >
            Search
          </button>
        </div>

        <Link to="/cart" className="relative mt-4 md:mt-0">
          <img
            src={cartSvg}
            alt="cart"
            className="hover:scale-110 transition-transform duration-300 ease-in-out"
            style={{ width: "50px", height: "50px" }}
          />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            5
          </span>
        </Link>
      </header>
    </div>
  );
};
export default Header;
