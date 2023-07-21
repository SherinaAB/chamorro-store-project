import React, { useEffect, useState} from 'react'
import ProductList from './ProductList'
import NewStory from './NewStory'

export default 
function About({item}) {
    const [itemList,setItemList] = useState([])
    const [newStory, setNewStory] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/story")
        .then (response => response.json())
        .then (data => setItemList(data))
    },[])

    function addNewStory(createdStory){
        setNewStory([...newStory,createdStory])
        }
        
  return (
    <div className='Bio-Container'>
            <h2>We are so glad you're here, thank you for visiting our site and sharing in our story.  </h2>
            {/* <h2>Proa </h2>
            <h2>Tåno' y Chamoru </h2> */}
            <ProductList itemList={itemList}/>
            <p></p>
            <p></p>
        <div className='New-Story'>
        <NewStory addNewStory={addNewStory}/>
        </div>
    </div>
  )
}
