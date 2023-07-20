import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import NewStory from './NewStory'


export default function Category() {
    // console.log("hello")
  const [itemList, setItemList] = useState([])
  // const [newStory, setNewStory] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:3000/clothing")
      .then (response => response.json())
      .then (data => setItemList(data))
  },[])

  // function addNewStory(newStory){
  //   setItemList([...item,newStory])
  //   }

  return (
    <div className='category-container'>
        <ProductList itemList={itemList}/>
        {/* <NewStory addNewStory={addNewStory}/> */}
    </div>
  )
}
