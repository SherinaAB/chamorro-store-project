import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function ProductCard({item}) {
  // console.log(item)
    const [itemImg,setItemImg] = useState(true);
    const [itemTitle,setItemTitle] = useState(true);
    const [itemDesc,setItemDesc] = useState(true);
    // const [itemInventory,setItemInventory] = useState(true);
    // const [itemPrice,setItemPrice] = useState(true);
    const [story,setStory] = useState(true);

    const navigate = useNavigate()

  return (
    <div className='product-cards'>
      {/* <div onClick={()=>setItemImg(!itemImg)}>{itemImg ? <img src={item.image} alt={item.name}></img> : null}</div> */}
      <div> {item.image ? <img src={item.image} alt={item.name}></img> : null}</div>
        <h2 onClick={() => navigate(`/category/${item.categoryId}`)}>{item.type}</h2>
      <div> {itemTitle ? <h1>{item.title}</h1> : null}</div> 
      <div> {itemDesc ? <p>{item.description}</p> : null}</div>
      <div> {item.inventory ? <h4>Inventory: {item.inventory}</h4> : null} </div>
      <div> {item.price ? <h4>Price: ${item.price}</h4> : ('')}</div>
      <div> {story ? <p>{item.story}</p> : null}</div>
      {/* <Link to = {`/category/${id}`}>Everyday Wear</Link> */}
    </div>
  )
}


// when they click on the h2 we want to redirect them to category/id using the useNavigate react router dom hook. 
// on the category page we need to use the react router dom hook, useParams to pull the ID out of the URL and then fetch the category data with that id.
// last step is render the data on the table