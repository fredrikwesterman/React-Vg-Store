import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error(error + "Could not fetch the data!");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error + "problem with server. try again later.");
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filterAuctions = searchInput.toLowerCase()
      ? products.filter((product) => {
          return product.name.toLowerCase().includes(searchInput.toLowerCase());
        })
      : [];
    console.log(filterAuctions);

    setSearchedProducts(filterAuctions);
  }, [searchInput, products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        searchInput,
        setSearchInput,
        searchedProducts,
        setSearchedProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;
