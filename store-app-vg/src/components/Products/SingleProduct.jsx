import { useContext, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContextProvider";
import ProdImg from "../../imgs/rope.jpg";

const SingleProduct = () => {
  const { cart, setCart } = useContext(CartContext);
  const [addToCartSuccess, setAddToCartSuccess] = useState(false);

  const location = useLocation();
  const { product } = location.state || {};

  const addToCart = () => {
    setCart([...cart, product]);
    setAddToCartSuccess(true);

    setTimeout(() => {
      setAddToCartSuccess(false);
    }, "2000");
  };

  return (
    <>
      <div className="divider"></div>
      <div className="text-sm breadcrumbs mt-6">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <p>{product.name}</p>
          </li>
        </ul>
      </div>
      <div className="container flex mt-6 bg-base-200 shadow-xl">
        <img className="rounded" src={ProdImg} alt="Product img" />
        <div className="ml-6">
          <h2 className="text-bold text-4xl mt-6">{product.name}</h2>
          <i>Brand: {product.brand}</i>
          <p>
            <br />
            <b>Price: </b>
            {product.price}$
          </p>
          <div className="divider"></div>
          <p>
            <b>Description </b>
            <br />
            {product.ropeDescription}
          </p>
          <div className="divider"></div>
          <div className="flex">
            <p>
              <b>Length: </b>
              {product.length}
            </p>
            <p className="ml-4">|</p>
            <p className="mr-4 ml-4">
              <b>Thickness: </b>
              {product.thickness}
            </p>
            <p className="mr-4">|</p>
            <p>
              <b>Water Resistance: </b>
              {product.waterResistance}
            </p>
          </div>
          <div>
            <button
              className="btn btn-accent mt-6 mb-6"
              onClick={() => addToCart()}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {addToCartSuccess && (
        <div className="toast toast-start">
          <div className="alert alert-success">
            <span>Product added to cart!</span>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
