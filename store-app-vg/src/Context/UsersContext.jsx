import { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSucces, setLoginSucces] = useState(false);
  const [couldNotLoggin, setCouldNotLoggin] = useState(false);

  console.log(users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        if (!response.ok) {
          throw new Error(error + "Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error + "problem with server! try again later.");
      }
    };
    fetchUsers();
  }, []);

  const loginFunction = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          email: email,
        }),
      });
      if (!response.ok) {
        setCouldNotLoggin(true);
        throw new Error(error + "Failed to login");
      }

      setLoginSucces(true);
      setCouldNotLoggin(false);
    } catch (error) {
      console.log(error + "Could not loggin, server issues.");
    }

    setTimeout(() => {
      setLoginSucces(false);
    }, 2000);
    setTimeout(() => {
      setCouldNotLoggin(false);
    }, 5000);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        loginFunction,
        setEmail,
        setPassword,
        loginSucces,
        couldNotLoggin,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
