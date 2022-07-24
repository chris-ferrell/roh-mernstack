import { useState } from 'react'

const AddUserForm = () => {
  const [userID, setUserID] = useState('')
  const [userName, setUserName] = useState('')
  const [balance, setBalance] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {userID, userName, balance}
    
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    
    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setUserID('')
      setUserName('')
      setBalance('')
      console.log('new user added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New User</h3>

      <label>User id:</label>
      <input 
        type="number" 
        onChange={(e) => setUserID(e.target.value)} 
        value={userID}
      />

      <label>User Name</label>
      <input 
        type="text" 
        onChange={(e) => setUserName(e.target.value)} 
        value={userName}
      />

      <label>Account Balance:</label>
      <input 
        type="number" 
        onChange={(e) => setBalance(e.target.value)} 
        value={balance} 
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default AddUserForm