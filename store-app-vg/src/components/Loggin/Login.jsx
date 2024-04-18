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
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={() => login()}>Log in</button>
        <NavLink to="/create-user">Create User</NavLink>
      </div>

      {loginSucces && <p>Welcome back {email}!</p>}

      {existingEmail && (
        <p>
          User dont exist 🤷‍♂️ maybe <NavLink to="/create-user">create</NavLink>
          one?
        </p>
      )}
      {wrongPassword && <p>Wrong password! try again! 🤯</p>}
    </>
  );
};

export default Login;
