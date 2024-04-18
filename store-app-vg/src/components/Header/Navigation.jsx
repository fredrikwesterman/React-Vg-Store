import { NavLink } from "react-router-dom";

const nav = () => {
  return (
    <div style={{ alignSelf: "center", margin: "0 auto", fontSize: "24px" }}>
      <nav
        style={{ display: "flex", margin: "5px", justifyContent: "flex-end" }}
      >
        <NavLink style={{ marginRight: "10px" }} to="/products">
          Products
        </NavLink>

        <NavLink to="/login">Login</NavLink>
      </nav>
    </div>
  );
};

export default nav;
