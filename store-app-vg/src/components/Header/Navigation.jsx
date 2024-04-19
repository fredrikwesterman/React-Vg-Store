import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContextProvider";

const nav = () => {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ alignSelf: "center", margin: "0 auto", fontSize: "24px" }}>
      <nav
        style={{ display: "flex", margin: "5px", justifyContent: "flex-end" }}
      >
        <NavLink to="/products">Products</NavLink>

        <NavLink style={{ margin: "0 30px 0 10px" }} to="/login">
          Login
        </NavLink>
        <NavLink to="/cart">🛒</NavLink>
        <i>{cart.length}</i>
      </nav>
    </div>
  );
};

export default nav;
