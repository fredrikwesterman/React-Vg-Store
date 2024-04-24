import Nav from "./Navigation";
import Logo from "../../imgs/logo.png";
import { NavLink } from "react-router-dom";
import SearchBar from "../Search/SearchBar";

const Header = () => {
  return (
    <div className="flex">
      <div className="flex">
        <NavLink to="/" className="text-6xl self-center">
          <h1>Klippu</h1>
        </NavLink>
      </div>
      <div className="flex ml-auto">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
