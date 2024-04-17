import { useContext } from "react";
import { ProductContext } from "../Context/ProductsContext";
import { UsersContext } from "../Context/UsersContext";

const ProductsList = () => {
  const { products } = useContext(ProductContext);

  console.log(products);

  return (
    <>
      {products ? (
        products.map((product, idx) => <h2 key={idx}>{product.brand}</h2>)
      ) : (
        <div>No results</div>
      )}
    </>
  );
};

export default ProductsList;
