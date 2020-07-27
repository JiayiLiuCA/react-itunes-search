import React from 'react'
import Item from './Item'
import '../Styles/ItemList.css'

const ItemList = ({ items }) => {
    return (
        <div className="itemlist">
            {items.map(item => (
                <Item item={item} key={item.collectionId} />
            ))}
        </div>
    )
}

export default ItemList
