import { useContext } from "react";
import { ProductContext } from "../../Context/ProductsContext";
import { NavLink } from "react-router-dom";
import rope from "../../imgs/rope.jpg";
import CategoriesList from "./CategoriesList";
import SearchBar from "../Search/SearchBar";
import SearchResults from "../Search/SearchResults";

const ProductsList = () => {
  const { products, searchedProducts } = useContext(ProductContext);

  console.log(products);

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
        </ul>
      </div>
      <div className="flex">
        <CategoriesList />
        <SearchBar />
      </div>
      <div className="container mx-auto px-4 flex flex-wrap mt-10">
        {products ? (
          searchedProducts.length > 0 ? (
            <SearchResults />
          ) : (
            products.map((product) => (
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
                      <div className="badge badge-outline">
                        {product.category}
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))
          )
        ) : (
          <div>No products to be found! Problem with the server. 404 🤯</div>
        )}
      </div>
    </>
  );
};

export default ProductsList;
