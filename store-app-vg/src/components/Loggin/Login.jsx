import { useState, useContext } from "react";
import { UsersContext } from "../../Context/UsersContext";

const Login = () => {
  const { users } = useContext(UsersContext);
  console.log(users);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (email || password)
      fetch("http://localhost:3000/users", {
        method: "POST",
        body: "stringify.json",
      });
  };

  return (
    <div className="">
      <label
        htmlFor="email"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        placeholder="Email"
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />

      <input
        type="password"
        name="password"
        id="password"
        autoComplete="password"
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />

      <button className="btn btn-primary" onClick={() => login()}>
        Log in
      </button>
      <button>Sign up</button>
    </div>
  );
};

export default Login;
