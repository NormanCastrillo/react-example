import {useContext} from 'react'
import {UserContext} from '../context/UserContext' 

function UserCard({user}) {
  const {deleteUser} = useContext(UserContext)

  return (
    <div className='bg-white p-3 text-center rounded-md'>
        <h1 className='text-xl font-bold capitalize' >{user.nombre}</h1>
        <h1 className='text-sm'>{user.apellido}</h1>
        <button className='bg-red-500 text-white rounded-md mt-4 p-2 hover:bg-red-400' onClick={()=>{deleteUser(user.id)}}>Eliminar {user.id}</button>
    </div>
  )
}

export default UserCard