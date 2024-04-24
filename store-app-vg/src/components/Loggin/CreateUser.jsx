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
      <div className="divider"></div>
      <div className="container mt-10">
        <div className="card w-96 bg-base-200 text-neutral-content mx-auto">
          <div className="card-body items-center text-center ">
            <h2 className="text-3xl mb-5 text-black">Create User</h2>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email"
              minLength="5"
              onChange={(e) => setCreateEmail(e.target.value)}
              className="input input-bordered input-accent w-full max-w-xs text-black"
            />

            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              placeholder="Password"
              minLength="5"
              onChange={(e) => setCreatePassword(e.target.value)}
              className="input input-bordered input-accent w-full max-w-xs text-black"
            />
            <button className="btn btn-accent" onClick={() => createUser()}>
              Create user
            </button>
            <NavLink
              to="/login"
              className="btn btn-ghost hover:scale-110 text-black"
            >
              Back to login page
            </NavLink>
          </div>
          {emptyInput && <div>Email or Password field cant be empty!</div>}
          {userAlreadyExist && (
            <div>Email already exist! Try another Email</div>
          )}
        </div>
      </div>
    </>
  );
};
export default CreateUser;
