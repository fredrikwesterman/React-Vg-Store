import ProductsContextProvider from "../Context/ProductsContext";
import UsersContextProvider from "../Context/UsersContext";
import Login from "./Loggin/Login";
import ProductsList from "./ProductsList";

function App() {
  return (
    <>
      <UsersContextProvider>
        <Login />
      </UsersContextProvider>
      {/* <ProductsContextProvider>
        <ProductsList />
      </ProductsContextProvider> */}
    </>
  );
}

export default App;
