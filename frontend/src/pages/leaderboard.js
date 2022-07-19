import React from 'react'
import { useEffect, useState}from 'react'

//components 
import UserDetails from '../components/category/general/UserDetails'



function Leaderboard() {
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
            <h4>Leaderboard</h4>
            {users && users.map((user) => (
            
            <UserDetails key={user._id} user={user} />
            
            ))}

        </div>
        
    </div>
  )
}

export default Leaderboard