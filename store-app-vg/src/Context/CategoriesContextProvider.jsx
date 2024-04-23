import { createContext, useEffect, useState } from "react";

export const categoriesContext = createContext();

const CategoriesContextProvider = (props) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/categories");
        if (!response.ok) {
          console.log("could not fetch categories 🤷‍♂️");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(
          error + "error fetching categories, problem with the server"
        );
      }
    };
    fetchCategories();
  }, []);

  console.log(categories);

  return (
    <categoriesContext.Provider value={{ categories }}>
      {props.children}
    </categoriesContext.Provider>
  );
};

export default CategoriesContextProvider;
