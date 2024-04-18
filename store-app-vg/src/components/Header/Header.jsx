import Nav from "./Navigation";
import Logo from "../../imgs/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavLink to="/">
        <img src={Logo} alt="Klippu logo" />
      </NavLink>
      <Nav />
    </div>
  );
};

export default Header;
