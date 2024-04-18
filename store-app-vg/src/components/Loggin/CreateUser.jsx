import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UsersContext } from "../../Context/UsersContext";

const CreateUser = () => {
  const { users, setUsers } = useContext(UsersContext);

  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);

  const createUser = async () => {
    try {
      if (createEmail.trim() === "" || createPassword.trim() === "") {
        setEmptyInput(true);
        setUserAlreadyExist(false);
        return;
      }

      if (users.some((user) => user.email === createEmail)) {
        setUserAlreadyExist(true);
        setEmptyInput(false);
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

      setEmptyInput(false);
      setUserAlreadyExist(false);
    } catch (error) {
      console.log(error + "error creating user!");
    }
  };

  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="Email"
          onChange={(e) => setCreateEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="password"
          placeholder="Password"
          onChange={(e) => setCreatePassword(e.target.value)}
        />
        <button onClick={() => createUser()}>Create user</button>
        <NavLink to="/login">Back to login page</NavLink>
      </div>
      {emptyInput && <div>Email or Password field cant be empty!</div>}
      {userAlreadyExist && <div>Email already exist! Try another Email</div>}
    </>
  );
};
export default CreateUser;
