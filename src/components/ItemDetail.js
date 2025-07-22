import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const ItemDetail = () => {
    const {id} = useParams();
    console.log("what is come in id",id);
  return (
    <div>
        <h1>Item {id}</h1>
      <p>Description for Item {id}</p>
    </div>
  )
}

export default ItemDetail