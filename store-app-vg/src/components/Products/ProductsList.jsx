import { useContext } from "react";
import { ProductContext } from "../../Context/ProductsContext";
import { NavLink } from "react-router-dom";

const ProductsList = () => {
  const { products } = useContext(ProductContext);

  console.log(products);

  return (
    <ul style={{ display: "flex" }}>
      {products ? (
        products.map((product, idx) => (
          <NavLink to={`/${product.id}`} state={{ product }}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <li className="card-body" key={idx}>
                <h2 className="card-title">{product.brand}</h2>
                <p>{product.length}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Go to product</button>
                </div>
              </li>
            </div>
          </NavLink>
        ))
      ) : (
        <div>No results</div>
      )}
    </ul>
  );
};

export default ProductsList;
