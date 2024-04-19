import { useContext } from "react";
import { ProductContext } from "../../Context/ProductsContext";
import { NavLink } from "react-router-dom";
import rope from "../../imgs/rope.jpg";

const ProductsList = () => {
  const { products } = useContext(ProductContext);

  console.log(products);

  return (
    <div className="container mx-auto px-4 flex flex-wrap mt-10">
      {products ? (
        products.map((product) => (
          <div
            key={product.id}
            className="card w-96 bg-base-100 shadow-xl m-5 bg-neutral"
          >
            <NavLink to={`/${product.id}`} state={{ product }}>
              <figure>
                <img src={rope} alt="Rope" className="rounded-xl mt-6" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.brand}</h2>
                <p>{product.length}</p>
              </div>
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
