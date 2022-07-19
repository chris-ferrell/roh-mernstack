import React from 'react'
import { useEffect }from 'react'

//components 
import ItemDetails from '../components/category/item-shop/ItemDetails'

import AddItemForm from '../components/category/item-shop/AddItemForm'

import { useItemsContext } from "../hooks/useItemContext"


function Shop() {
    const {items, dispatch} = useItemsContext()

    useEffect(() => {
      const fecthUsers = async () => {
          const response = await fetch('/api/items')
          const json = await response.json()

        if (response.ok) {
            dispatch({type: 'SET_ITEMS', payload: json})
        }

      } 

      fecthUsers()
    }, [])


  return (
    <div className="home">
        <div className="users">
            <h4>item shop</h4>
            {items && items.map((item) => (
            
            <ItemDetails key={item._id} item={item} />
            
            ))}

        </div>
      <AddItemForm/>
    </div>
  )
}

export default Shop