import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContextProvider";

const ShoppingCart = () => {
  const {
    cart,
    setCart,
    totalPrice,
    setTotalPrice,
    placeOrder,
    orderFailed,
    orderSuccess,
  } = useContext(CartContext);
  console.log(cart);

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
              <button
                className="btn btn-error"
                onClick={() => removeFromCart(product, product.price)}
              >
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
        <button className="btn btn-primary" onClick={() => placeOrder()}>
          Place order
        </button>
      </div>

      {orderFailed && <div>Failed to place order, try again!</div>}
      {orderSuccess && <div>Order placed! Thanks for ordering ❤️</div>}
    </>
  );
};

export default ShoppingCart;
