import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteUserInfo, setUserInfo, storeUserInfo } from '../redux/actions/userActions'
import UserList from './UserList'

function HomePage() {
  const users = useSelector(state =>state.userInfo)
  const adminUser = useSelector(state =>state.adminInfo)
  const [user, setUser] = useState({});

  const dispatch = useDispatch()
  //  dispatch = action
  const nameRef = useRef()
  
  const handleChange = e => {
    const { name, value } = e.target
    setUser(prevState => ({ ...prevState, [name]: value }))
  }

  const handleDelete = id => {
    dispatch(deleteUserInfo(id))
  }



  const handleSubmit = e => {
    e.preventDefault()
    dispatch(storeUserInfo(user))

    //this will set the state user to empty after submit
    setUser({
      name: "",
      age: "",
    })
    nameRef.current.focus()

  }

  return (
    <>
  
     <form onSubmit={handleSubmit}>
     <input
        type="hidden"
        name="id"
        value={100}
      />
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={e => handleChange(e)}
        ref={nameRef}
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={e => handleChange(e)}
        ref={nameRef}
      />
      <button>Add User</button>
    </form>
  
      {users.map((user,id)=>(
       <UserList key={id} user={user} handleDelete={handleDelete}/>
      ))}
    </>
  )
}

export default HomePage