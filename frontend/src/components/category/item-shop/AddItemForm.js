import { useState } from 'react'
import { useItemsContext } from "../../../hooks/useItemContext"

const AddItemForm = () => {
    const { dispatch } = useItemsContext()
    const [itemID, setItemID] = useState('')
    const [itemName, setItemName] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const [itemBriefDescription, setItemBriefDescription] = useState('')
    const [itemFullDescription, setItemFullDescription] = useState('')
    const [itemQuanity, setItemQuanity] = useState('')
    const [error, setError] = useState(null)

    const  handleSubmit = async (e) => {
      e.preventDefault()
      
      const item = {itemID, itemName, itemPrice, itemBriefDescription, itemFullDescription, itemQuanity}
      
      const response = await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json'
        }
      })
      const json = await response.json() 

      if (!response.ok) {
        setError(json.error)
      }
      if (response.ok) {
        setItemID('')
        setItemName('')
        setItemPrice('')
        setItemBriefDescription('')
        setItemFullDescription('')
        setItemQuanity('')
        setError(null)
        console.log('New item added to Shop', json)
        dispatch({type: 'CREATE_ITEM', payload: json})
      }

    }
    
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Item to Shop</h3>

            <label> ID: </label>
            <input type="number"
                   onChange={(e) => setItemID(e.target.value)} 
                   value={itemID}
                />

            <label> Name: </label>
            <input 
                type="text"
                onChange={(e) => setItemName(e.target.value)} 
                value={itemName}
              />

            <label> Price: </label>
            <input 
                type="number"
                onChange={(e) => setItemPrice(e.target.value)} 
                value={itemPrice}
              />

            <label> Brief Desc: </label>
            <input 
                type="text"
                onChange={(e) => setItemBriefDescription(e.target.value)} 
                value={itemBriefDescription}
              />

            <label> Full Desc: </label>
            <input 
                type="text"
                onChange={(e) => setItemFullDescription(e.target.value)} 
                value={itemFullDescription}
              />

            <label> Quanity </label>
            <input 
                type="number"
                onChange={(e) => setItemQuanity(e.target.value)} 
                value={itemQuanity}
              />



            <button>Add Item</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default AddItemForm