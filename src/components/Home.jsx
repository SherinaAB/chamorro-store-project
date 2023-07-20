import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
// import NavBar from './NavBar'

export default function Home() {
    // console.log("hafa adai")
    const [itemList, setItemList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/category")
      .then (response => response.json())
      .then (data => setItemList(data))
  },[])

  return (
    <div className="main-home">
        <img src="src/assets/JacobMaddieProposal.jpeg"></img>
        
        <h2>"Hafa Adai, todo malik!!!"</h2>
        <header>
            <div className='home-container'>
                <ProductList itemList={itemList}/>
                {/* <img src="./src/assets/Guam_T_Placeholder_.jpeg"></img> */}
            </div>
         </header>
    </div>
  )
}
