import React from "react";
import { useCart } from "../../cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    calculateTotalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

          {cartItems.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b pb-4 mb-4"
            >
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt="Product"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h3 className="font-semibold">{product.title}</h3>
                  <p className="text-gray-600">Price: $ {product.price}</p>
                </div>
              </div>
              <div className="side-container  flex flex-col w-28 justify-center items-center">
                <div className="btns flex justify-center items-center">
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="border w-8 h-8 hover:bg-blue-600"
                  >
                    +
                  </button>
                  <span className="text-gray-600 font-light block p-3">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="border w-8 h-8 hover:bg-blue-600"
                  >
                    -
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="p-2 border w-24 bg-blue-500 rounded-md text-white font-bold hover:bg-blue-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {cartItems.length === 0 ? (
            <div className="text-2xl text-center">
              No items in the cart 😒 --
            </div>
          ) : (
            <div>
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Total:</p>
                <p className="text-lg font-semibold">
                  $ {calculateTotalPrice()}
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <Link to="/checkout">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
