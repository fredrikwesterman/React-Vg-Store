import { useContext } from "react";
import { ProductContext } from "../../Context/ProductsContext";
import { NavLink } from "react-router-dom";
import rope from "../../imgs/rope.jpg";

const SearchResults = () => {
  const { searchedProducts } = useContext(ProductContext);

  return (
    <>
      {searchedProducts &&
        searchedProducts.map((product) => (
          <div
            key={product.id}
            className="card card-compact mx-auto w-80 bg-base-200 shadow-xl hover:scale-105 mb-6"
          >
            <NavLink to={`/${product.id}`} state={{ product }}>
              <figure>
                <img
                  src={rope}
                  alt="Rope"
                  className="border-round"
                  style={{ width: "350px" }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{product.brand}</div>
                  <div className="badge badge-outline">{product.category}</div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
    </>
  );
};

export default SearchResults;
