import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderFailed, setOrderFailed] = useState(false);

  useEffect(() => {
    if (cart) {
      const total = cart.reduce((acc, product) => acc + product.price, 0);
      setTotalPrice(total);
    }
  }, [cart]);

  const orderBody = {
    products: cart.length,
    price: totalPrice,
  };

  console.log(orderBody);

  const placeOrder = async () => {
    try {
      if (cart.length > 0) {
        const response = fetch("http://localhost:3000/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderBody),
        });
        if (!response.ok) {
          setOrderFailed(true);
        }

        setCart([]);
        setOrderFailed(false);
        setOrderSuccess(true);
      } else {
        setOrderFailed(true);
      }
    } catch (error) {
      console.log(error + "Could not place order, try again");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalPrice,
        setTotalPrice,
        placeOrder,
        orderFailed,
        orderSuccess,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
