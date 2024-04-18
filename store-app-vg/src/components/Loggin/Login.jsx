import { useState, useContext } from "react";
import { UsersContext } from "../../Context/UsersContext";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { users, setUsers, email, setEmail, password, setPassword, login } =
    useContext(UsersContext);
  console.log(users);

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        placeholder="Email"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="password"
        placeholder="Password"
      />

      <button>Log in</button>
      <NavLink to="/create-user">Create User</NavLink>
    </div>
  );
};

export default Login;
