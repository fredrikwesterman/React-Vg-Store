import { useContext } from "react";
import { ProductContext } from "../../Context/ProductsContext";
import { NavLink } from "react-router-dom";

const ProductsList = () => {
  const { products } = useContext(ProductContext);

  console.log(products);

  return (
    <div style={{ display: "flex" }}>
      {products ? (
        products.map((product) => (
          <div key={product.id}>
            <NavLink to={`/${product.id}`} state={{ product }}>
              <h2 className="card-title">{product.brand}</h2>
              <p>{product.length}</p>
            </NavLink>
          </div>
        ))
      ) : (
        <div>No results</div>
      )}
    </div>
  );
};

export default ProductsList;
