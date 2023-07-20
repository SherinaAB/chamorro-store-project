import React, { useState } from 'react'

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
      <div onClick={()=>setItemImg(!itemImg)}>{itemImg ? <img src={item.image} alt={item.name}></img> : null}</div>
      <div>
        <h2>{item.type}</h2>
      </div>
      <div onClick={()=>setItemTitle(!itemTitle)}> {itemTitle ? <h1>{item.title}</h1> : null}</div> 
      <div onClick={()=>setItemDesc(!itemDesc)}> {itemDesc ? <p>{item.description}</p> : null}</div>
      <div> {item.inventory ? <h4>Inventory: {item.inventory}</h4> : null} </div>
      <div> {item.price ? <h4>Price: ${item.price}</h4> : ('')}</div>
      <div onClick={()=>setStory(!story)}> {story ? <p>{item.story}</p> : null}</div>
    </div>
  )
}
