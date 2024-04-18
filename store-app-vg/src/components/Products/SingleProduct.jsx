import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();
  const { product } = location.state || {};
  console.log(product);

  return <div>{product.brand}</div>;
};

export default SingleProduct;
