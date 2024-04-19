import { useState, useContext } from "react";
import { UsersContext } from "../../Context/UsersContext";
import { NavLink } from "react-router-dom";

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
      <div className="container mx-auto mt-10">
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="text-3xl mb-5">Log in</h2>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered input-secondary w-full max-w-xs"
            />
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered input-secondary w-full max-w-xs"
            />

            <button className="btn btn-primary" onClick={() => login()}>
              Log in
            </button>
            <NavLink to="/create-user" className="btn btn-ghost">
              Create User
            </NavLink>
          </div>
        </div>
      </div>

      {loginSucces && (
        <div role="alert" className="alert alert-success mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Welcome back {email}!</span>
        </div>
      )}

      {existingEmail && (
        <div role="alert" className="alert alert-warning mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p>
            User dont exist! Do you want to{" "}
            <NavLink className="btn btn-outline text-black" to="/create-user">
              create{" "}
            </NavLink>{" "}
            one?
          </p>
        </div>
      )}
      {wrongPassword && (
        <div role="alert" className="alert alert-warning mt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p>Wrong password! try again! 🤯</p>
        </div>
      )}
    </>
  );
};

export default Login;
