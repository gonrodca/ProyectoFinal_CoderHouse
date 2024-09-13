import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(0);

  const addItem = (product) => {
    setCartState(cartState + 1);
  };
  const removeItem = (product) => {
    setCartState(cartState + 1);
  };
  return (
    <CartContext.Provider value={{ cartState, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
