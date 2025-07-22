import React from 'react'
import { Link, Route } from 'react-router-dom/cjs/react-router-dom.min'
import ItemDetail from './ItemDetail'

const ItemList = () => {
  return (
    <div>
       <h2>Item List</h2>
        <Link to='/items/1'>Item 1</Link>
        <br></br>
        <Link to='/items/2'>Item 2</Link>
        <br></br>
        <Link to='/items/3'>Item 3</Link>
   

        
        </div>
  )
}

export default ItemList