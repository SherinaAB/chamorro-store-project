import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import NewStory from './NewStory'
// import { useParams } from "react-router-dom";

export default function Category() {
    // console.log("hello")
  const [itemList, setItemList] = useState([])
  // const { id } = useParams()
  // const [newStory, setNewStory] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:3000/clothing")
      .then (response => response.json())
      .then (data => setItemList(data))
  },[])
//   fetch(`/clothing/${id}`)
//     .then (response => response.json())
//     .then (data => setItemList(data))
// },[id])

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
