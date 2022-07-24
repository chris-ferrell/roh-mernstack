import React from 'react'
import { useState, useEffect } from 'react'
import UserAccountDetails from './UserAccountDetails'
import Select from 'react-select'





const UserManagerForm = () => {
     /////////////////////////
     /*FETCH ALL USERS BELOW*/
     /////////////////////////

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


    //////////////////////////
    /* FETCH ALL USERS ABOVE*/
    //////////////////////////

    ////////////////////////////
    /* UPDATE USER CODE BELOW */
    ////////////////////////////
    const [userName, setUserName] = useState()
    const [balance, setBalance] = useState()
    const [error, setError] = useState(null)
        
    


    function updateDataBase(UserName,UserBalance) {
        fetch(`/api/users/${UserName}`, {
            method: 'PATCH',
            body: JSON.stringify({
                "balance": UserBalance,
            }),
            headers: {
                'Content-type': 'application/json'
              },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));

    }

    function handleSubmit(e) {
        e.preventDefualt()
        setUserName("")
        setBalance("")
    }
     ////////////////////////////
     /* UPDATE USER CODE ABOVE */ 
     ////////////////////////////

    
   

  return (
    
    <form onSubmit={handleSubmit}>

        <div>
        
           

        </div>

        <label> username,amount </label>
        <input type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="username"/>
        <button onClick={() => updateDataBase(setUserName)}>
            update
        </button>

        <label>   </label>
        <input type="number" value={balance} onChangep={e => setBalance(e.target.value)} placeholder="balance"/>
        <button onClick={() => updateDataBase(setBalance)}>
            update
        </button>
    
        

    </form>
    
  )
}

export default UserManagerForm