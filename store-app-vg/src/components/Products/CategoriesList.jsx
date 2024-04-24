import { useContext } from "react";
import { categoriesContext } from "../../Context/CategoriesContextProvider";

const CategoriesList = () => {
  const { categories } = useContext(categoriesContext);

  return (
    <div className="flex flex-wrap mr-auto">
      {categories &&
        categories.map((category, idx) => (
          <p key={idx} className="btn btn-border mr-1 mt-4">
            {category.type}
          </p>
        ))}
    </div>
  );
};

export default CategoriesList;
