import React, { useState } from 'react'
// import { Link } from "react-router-dom";

export default function ProductCard({item}) {
  // console.log(item)
    const [itemImg,setItemImg] = useState(true);
    const [itemTitle,setItemTitle] = useState(true);
    const [itemDesc,setItemDesc] = useState(true);
    // const [itemInventory,setItemInventory] = useState(true);
    // const [itemPrice,setItemPrice] = useState(true);
    const [story,setStory] = useState(true);

  return (
    <div className='product-cards'>
      {/* <div onClick={()=>setItemImg(!itemImg)}>{itemImg ? <img src={item.image} alt={item.name}></img> : null}</div> */}
      <div> {item.image ? <img src={item.image} alt={item.name}></img> : null}</div>
        <h2>{item.type}</h2>
      <div> {itemTitle ? <h1>{item.title}</h1> : null}</div> 
      <div> {itemDesc ? <p>{item.description}</p> : null}</div>
      <div> {item.inventory ? <h4>Inventory: {item.inventory}</h4> : null} </div>
      <div> {item.price ? <h4>Price: ${item.price}</h4> : ('')}</div>
      <div> {story ? <p>{item.story}</p> : null}</div>
      {/* <Link to = {`/category/${id}`}>Everyday Wear</Link> */}
    </div>
  )
}
