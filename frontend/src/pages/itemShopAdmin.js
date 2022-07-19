import React from 'react'
import { useEffect, useState}from 'react'

//components 
import UserDetails from '../components/UserDetails'
import UserForm from '../components/AddUserForm'
import AddUserForm from '../components/AddUserForm'

function itemShopAdmin() {
    const [users, setUsers] = useState(null)

    useEffect(() => {
      const fecthUsers = async () => {
          const response = await fetch('/api/users')
          const json = await response.json()

        if (response.ok) {
            setUsers(json)
        }

      } 

      fecthUsers()
    }, [])


  return (
    <div className="home">
        <div className="users">
            {users && users.map((user) => (
            <UserDetails key={user._id} user={user} />
            ))}
        </div>
        <AddUserForm/>
    </div>
  )
}

export default itemShopAdmin