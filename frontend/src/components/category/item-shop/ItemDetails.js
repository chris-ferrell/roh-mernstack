import { useItemsContext } from "../../../hooks/useItemContext"

import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { formatDistance } from "date-fns/esm"

const ItemDetails = ({ item }) => {
    const { dispatch } = useItemsContext()

    const handleClick = async() => {
        const response = await fetch('/api/items/' + item._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_ITEM', payload: json})
        }
    }

    return(
        <div className="user-details">
            <h4>{item.itemName}</h4>
            <p><strong> HP </strong>{item.itemPrice}</p>
            <h6>Qty:{item.itemQuanity}</h6>
            <p>{formatDistanceToNow(new Date(item.createdAt), { addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )   
}

export default ItemDetails 