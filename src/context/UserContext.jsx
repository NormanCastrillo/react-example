import { createContext, useEffect, useState } from "react";
import { data } from "../data/data";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
  }, []);

  function addUser({ nombre, apellido }) {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        nombre: nombre,
        apellido: apellido,
      },
    ]);
  }

  function deleteUser(id) {
    //setUsers(users.filter(function(user){return user.id !== id}))
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <UserContext.Provider value={{users,addUser,deleteUser}}>
      {props.children}
    </UserContext.Provider>
  );
}
