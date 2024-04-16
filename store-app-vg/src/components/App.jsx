import Header from "./Header/Header";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(null);
  const fetchProds = () => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  };

  console.log(products);

  return (
    <>
      <Header />
      <button onClick={() => fetchProds()}>get that data!</button>
    </>
  );
}

export default App;
