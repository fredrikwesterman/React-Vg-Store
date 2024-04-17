import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/products");
      if (!response.ok) {
        throw new Error(error + "Could not fetch the data!");
      }
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;
