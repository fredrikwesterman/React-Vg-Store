import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContextProvider";

const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart) {
      const total = cart.reduce((acc, product) => acc + product.price, 0);
      setTotalPrice(total);
    }
  }, [cart]);

  const removeFromCart = (product, price) => {
    const theCart = [...cart];
    theCart.splice(product, 1);
    setCart(theCart);

    setTotalPrice(totalPrice - price);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        {cart &&
          cart.map((product, idx) => (
            <div key={idx} style={{ margin: "5px 15px" }}>
              <h3>
                <b>Product: </b>
                {product.brand}
              </h3>
              <p>
                <b>Length: </b>
                {product.length}
              </p>
              <p>
                <b>Price: </b>
                {product.price}$
              </p>
              <button onClick={() => removeFromCart(product, product.price)}>
                Remove
              </button>
            </div>
          ))}
      </div>
      <div style={{ display: "flex" }}>
        <h3>
          <b>Total Price: </b>
          {totalPrice}$
        </h3>
        <button>Place order</button>
      </div>
    </>
  );
};

export default ShoppingCart;
