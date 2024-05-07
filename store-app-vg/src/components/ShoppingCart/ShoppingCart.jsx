import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContextProvider";

const ShoppingCart = () => {
  const [removeFromCartSuccess, setRemoveFromCartSuccess] = useState(false);

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

    setRemoveFromCartSuccess(true);
    setTimeout(() => {
      setRemoveFromCartSuccess(false);
    }, "2000");
  };

  return (
    <>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((product, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>{product.price}$</td>
                  <td></td>
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => removeFromCart(product, product.price)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-6">
        <h3 className="self-center mr-4">
          <b>Total Price: </b>
          {totalPrice}$
        </h3>
        <button className="btn btn-accent" onClick={() => placeOrder()}>
          Place order
        </button>
      </div>
      {removeFromCartSuccess && (
        <div className="toast toast-start">
          <div className="alert alert-error">
            <span>Product Removed from cart!</span>
          </div>
        </div>
      )}

      {orderFailed && <div>Failed to place order, try again!</div>}
      {orderSuccess && <div>Order placed! Thanks for ordering ❤️</div>}
    </>
  );
};

export default ShoppingCart;
