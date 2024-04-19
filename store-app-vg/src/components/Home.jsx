import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-8xl font-bold">Welcome!</h1>
          <p className="py-10">
            Here you can buy the{" "}
            <span className="text-primary text-2xl">BEST</span> Climbing
            equipement ever!
          </p>
          <NavLink
            to="/products"
            className="btn btn-neutral text-3xl text-white"
          >
            Products
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
