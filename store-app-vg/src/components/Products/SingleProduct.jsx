import { useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";
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
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <p>{product.brand}</p>
          </li>
        </ul>
      </div>
      <div>
        <h2>
          <b>Name: </b>
          {product.brand}
        </h2>
        <p>
          <b>Price: </b>
          {product.price}$
        </p>
        <p>
          <b>Description: </b>
          {product.ropeDescription}
        </p>
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
        <NavLink to="/products">
          <button className="btn btn-primary mt-4" onClick={() => addToCart()}>
            Add to cart
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default SingleProduct;
