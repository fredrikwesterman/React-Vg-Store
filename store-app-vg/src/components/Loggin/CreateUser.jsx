import { useContext, useState, useRef } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { UsersContext } from "../../Context/UsersContext";

const CreateUser = () => {
  const { users, setUsers } = useContext(UsersContext);

  const eInput = useRef();
  const pInput = useRef();

  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");

  const createUser = async () => {
    try {
      if (createEmail.trim() === "" || createPassword.trim() === "") {
        alert("Fields cannot be empty");
        return;
      }

      if (users.some((user) => user.email === createEmail)) {
        alert("User already exists");
        return;
      }

      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: createEmail,
          password: createPassword,
        }),
      });
      if (!response.ok) {
        throw new Error(error + "Failed to create user!");
      }
      const data = await response.json();

      setUsers([
        ...users,
        {
          email: createEmail,
          password: createPassword,
        },
      ]);
    } catch (error) {
      console.log(error + "error creating user!");
    }
  };

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        placeholder="Email"
        required
        onChange={(e) => setCreateEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="password"
        placeholder="Password"
        required
        onChange={(e) => setCreatePassword(e.target.value)}
      />
      <button onClick={() => createUser()}>Create user</button>
      <NavLink to="/login">Back to login page</NavLink>
    </div>
  );
};
export default CreateUser;
