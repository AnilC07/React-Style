import React, { useState } from 'react'
import AddUser from './components/User/AddUser'
import UserList from './components/User/UserList'


function App() {

  const [usersList, setUsersList] = useState([])

const AddUserHandler = (uName, uAge) =>{
  setUsersList((prevUsersLists)=>{
    return [...prevUsersLists, {name: uName, age: uAge, id: Math.random().toString()}]
  })
  console.log(usersList)
}

  return (
    <div>
    <AddUser onAddUser={AddUserHandler}/>
    <UserList users={usersList}/>
    </div>
  )
}

export default App