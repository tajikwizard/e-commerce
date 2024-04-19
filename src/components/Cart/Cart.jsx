import React from "react";

const Cart = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Product"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="font-semibold">Product Name</h3>
                <p className="text-gray-600">Price: $20</p>
              </div>
            </div>
            <span className="text-gray-600">Qty: 1</span>
          </div>
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Product"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h3 className="font-semibold">Product Name</h3>
                <p className="text-gray-600">Price: $30</p>
              </div>
            </div>
            <span className="text-gray-600">Qty: 2</span>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-lg font-semibold">$70</p>
          </div>
          <div className="mt-8 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
