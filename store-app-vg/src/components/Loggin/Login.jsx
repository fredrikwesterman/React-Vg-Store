import { useState, useContext } from "react";
import { UsersContext } from "../../Context/UsersContext";
import { NavLink } from "react-router-dom";
import LogginFailed from "./LogginFailed";
import LoginSuccess from "./LoginSuccess";

const Login = () => {
  const { users } = useContext(UsersContext);
  console.log(users);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [existingEmail, setExistingEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [loginSucces, setLoginSucces] = useState(false);

  const login = () => {
    const existingEmail = users.find((user) => user.email === email);
    if (!existingEmail) {
      setExistingEmail(true);
      setWrongPassword(false);
      setLoginSucces(false);
      return;
    }

    if (existingEmail.password !== password) {
      setWrongPassword(true);
      setExistingEmail(false);
      setLoginSucces(false);
      return;
    }

    setLoginSucces(true);
    setWrongPassword(false);
    setExistingEmail(false);
  };

  return (
    <>
      <div className="divider"></div>
      <div className="container mt-10">
        <div className="card w-96 bg-base-200 text-neutral-content mx-auto">
          <div className="card-body items-center text-center">
            <h2 className="text-3xl mb-5 text-black">Log in</h2>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered input-accent w-full max-w-xs text-black"
            />
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered input-accent w-full max-w-xs text-black"
            />

            <button className="btn btn-accent" onClick={() => login()}>
              Log in
            </button>
            <NavLink
              to="/create-user"
              className="btn btn-ghost hover:scale-110 text-black"
            >
              Create User
            </NavLink>
          </div>
          {loginSucces ? (
            <LoginSuccess />
          ) : (
            <LogginFailed
              existingEmail={existingEmail}
              wrongPassword={wrongPassword}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
