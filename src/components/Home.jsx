import React, { useEffect, useState } from 'react'
// import ProductList from './ProductList'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



// import NavBar from './NavBar'

export default function Home(id) {
    // console.log("hafa adai")
    const [itemList, setItemList] = useState([])
    // const [isPlaying,setIsPlaying] = useState(false);
    const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3000/category/`)
      .then (response => response.json())
      .then (data => setItemList(data))
  },[])
  
//   function AudioComponent(){
//     const [isPlaying,setIsPlaying] = useState(false);
//     const handleClick = () => {
//         setIsPlaying(!isPlaying);
//     };

//   }
  return (
    <div className="main-home">
        {/* <img src="src/assets/JacobMaddieProposal.jpeg"></img>
        <div>
            <button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
                {isPlaying && (
                    <video controls>
                        <source src="src/assets/Hafa Adai.m4a"/>
                    </video>
                )}
        </div> */}

        <h2>"Hafa Adai, todo moalik!!!"</h2>
        <header>
            <div className='home-container'>
                {/* <ProductList itemList={itemList}/> */}
                {itemList.map(item=>(
                  <h1 onClick={() => navigate(`/category/${item.id}`)}>{item.type}</h1>
                ))}
                {/* <img src="./src/assets/Guam_T_Placeholder_.jpeg"></img> */}
                <Link to = {`/category/`}>Shop Now</Link>
            </div>
         </header>
    </div>
  )
}
