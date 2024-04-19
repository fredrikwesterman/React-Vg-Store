import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../Context/CartContextProvider";

const SingleProduct = () => {
  const { cart, setCart } = useContext(CartContext);

  const location = useLocation();
  const { product } = location.state || {};
  console.log(product);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>{product.brand}</h2>
      <p>{product.price}$</p>
      <p>{product.ropeDescription}</p>
      <div style={{ display: "flex" }}>
        <p>
          <b>Length: </b>
          {product.length}
        </p>
        <p>
          <b>Thickness: </b>
          {product.thickness}
        </p>
        <p>
          <b>Water Resistance: </b>
          {product.waterResistance}
        </p>
      </div>
      <button className="btn btn-neutral" onClick={() => addToCart()}>
        Add to cart
      </button>
    </div>
  );
};

export default SingleProduct;
