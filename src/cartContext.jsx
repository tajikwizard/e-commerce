import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id == item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    // Limit to two decimal places and convert to string
    return totalPrice.toFixed(2);
  };
  const increaseQuantity = (productId) => {
    const copy = cartItems.slice();
    const productIdx = copy.findIndex((product) => product.id === productId);
    if (productIdx !== -1) {
      copy[productIdx].quantity += 1;
      setCartItems(copy);
    }
  };

  const decreaseQuantity = (productId) => {
    const copy = cartItems.slice();
    const productIdx = copy.findIndex((product) => product.id === productId);
    if (productIdx !== -1 && copy[productIdx].quantity > 1) {
      copy[productIdx].quantity -= 1;
      setCartItems(copy);
    }
  };
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        calculateTotalPrice,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
