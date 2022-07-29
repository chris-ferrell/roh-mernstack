import React from 'react'
import { useState, useEffect } from 'react'
import UserAccountDetails from './UserAccountDetails'
import SearchBar from '../search-bar/SearchBar'





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
      //console.log(users)
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

 
  //////////##################################################################\\\\\\\\\\\\\\\\\\\\\\\
  function getUsers() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("/api/users", requestOptions)
      .then(response => response.json())
      .then(result =>  {

        var customList = [
          {UserNickName: '', UserID: ''}
        ];
        var customList2 = [
          {UserNick: '', UserId: ''}
        ]

        for (let i=0;i<result.length;i++) {

          let array = {userName: result[i]['userName'], userID: result[i]['userID']}
          let {userName, userID} = array;

          customList.push({UserNickName: userName, UserID: userID});

          console.log(userName, userID)
          
        }
        
        //for (let j=0; j<customList.length;j++) {
        //  let array = {userNick: customList[j]['UserNickName'], userId: customList[j]['UserID']}
        //  let {userNick, userId} = array;
          
        //  customList2.push({NickName: userNick, ID: userId})

        //} 
        //console.log(customList2)
      })
      /*
      let array = {userName: result[0]['userName'], userID: result[0]['userID']}
      let {userName, userID} = array;
      console.log(userName,userID)
      }) 
      */

  }
    
  
  console.log(getUsers())
   
   //////////##################################################################\\\\\\\\\\\\\\\\\\\\\\
  return (
    
    <form onSubmit={handleSubmit}>
        
        <div>
            
         <SearchBar placeholder="Search User..."/>

        </div>

        <label> username,amount </label>
        <input type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="username"/>
        <button onClick={() => updateDataBase(setUserName)}>
            update
        </button>

        <label>   </label>
        <input type="number" value={balance} onChange={e => setBalance(e.target.value)} placeholder="balance"/>
        <button onClick={() => updateDataBase(setBalance)}>
            update
        </button>
    
        

    </form>
    
  )
}

export default UserManagerForm