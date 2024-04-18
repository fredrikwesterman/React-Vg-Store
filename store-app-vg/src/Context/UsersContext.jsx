import { createContext, useState, useEffect } from "react";

export const UsersContext = createContext();

const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) {
        throw new Error(error + "Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
