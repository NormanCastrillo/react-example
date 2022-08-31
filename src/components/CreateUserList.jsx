import { useContext } from 'react';
import {UserContext} from '../context/UserContext';
import UserCard from "./UserCard";


function CreateUserList() {

  const{users} = useContext(UserContext)

  if (users.length === 0) {
    return <h1>sin usuarios</h1>;
  }

  return (
    <div className='grid grid-cols-3 gap-3'>
      {users.map((user,index) => (
        <UserCard key={index} user={user}/>
      ))}
    </div>
  );
}

export default CreateUserList;
