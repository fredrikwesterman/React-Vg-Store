import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
