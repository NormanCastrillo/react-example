import { useState, useContext } from "react";
import {UserContext} from "../context/UserContext"


function CreateUser() {
  const {addUser} = useContext(UserContext)

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    addUser({
        nombre:name,
        apellido:lastname
    })
    setName("")
    setLastName("")
  }

  return (
    <div className="max-w-md mx-auto bg-neutral-400 p-10 m-3">
      <form onSubmit={handleSubmit}>

        <h1 className="text-xl font-bold text-white mb-6 text-center">Registrar usuario:</h1>
        <input
          type="text"
          placeholder="Escribe el nombre "
          onChange={(e) => setName(e.target.value)}
          autoFocus
          value={name}
          className="bg-slate-50 w-full mb-3 p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Escribe el apellido "
          onChange={(e) => setLastName(e.target.value)}
          value={lastname}
          className="bg-slate-50 w-full mb-3 p-2 rounded-md"
        />
        <button className="w-full bg-green-900 text-white font-bold rounded-md p-3">Guardar</button>
      </form>
    </div>
    
  );
}

export default CreateUser;
