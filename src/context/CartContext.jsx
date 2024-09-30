import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  const addItem = (product, qtyItem) => {
    const existeProducto = cartState.some((item) => item.id === product.id);
    if (existeProducto) {
      setCartState(
        cartState.map((item) =>
          item.id === product.id ? { ...item, qtyItem: item.qtyItem + 1 } : item
        )
      );
    } else {
      setCartState([...cartState, { ...product, qtyItem }]);
    }
  };
  const removeItem = (product) => {
    const exist = cartState.some((item) => item.id === product.id);
    if (exist) {
      const prd = cartState.find((item) => item.id === product.id);
      if (prd.qtyItem === 1) {
        setCartState(cartState.filter((item) => item.id !== product.id));
      } else {
        setCartState(
          cartState.map((item) =>
            item.id === product.id
              ? { ...item, qtyItem: item.qtyItem - 1 }
              : item
          )
        );
      }
    }
  };
  const deleteItem = (product) => {
    setCartState(cartState.filter((item) => item.id !== product.id));
  };
  return (
    <CartContext.Provider
      value={{ cartState, addItem, removeItem, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
