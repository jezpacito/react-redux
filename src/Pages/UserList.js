import React from 'react'

const  UserList =({ user, handleDelete })=> {
  return (
   <div>
         {user.name} {user.age}
      <button onClick={() => handleDelete(user.id)}> delete </button>
   </div>

  )
}

export default UserList