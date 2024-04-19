import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "../src/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "../src/Context/ProductsContext";
import UsersContextProvider from "../src/Context/UsersContext";
import CartContextProvider from "../src/Context/CartContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UsersContextProvider>
    <CartContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsContextProvider>
    </CartContextProvider>
  </UsersContextProvider>
);
