import { Routes, Route } from "react-router-dom";
import ProductsList from "../Products/ProductsList";
import Login from "../Loggin/Login";
import CreateUser from "../Loggin/CreateUser";
import SingleProduct from "../Products/SingleProduct";
import Home from "../Home";
import Cart from "../ShoppingCart/ShoppingCart";

const Switch = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductsList />}></Route>
      <Route path="/:id" element={<SingleProduct />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/create-user" element={<CreateUser />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
};

export default Switch;
