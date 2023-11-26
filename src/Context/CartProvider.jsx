import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]); 
  console.log("cartData",cartData)
  return <CartContext.Provider value={[cartData, setCartData]}>{children}</CartContext.Provider>;
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };

