import React, { useEffect, useState} from 'react'
import NewStory from './NewStory'

export default 
function About({item}) {
    const [newStory, setNewStory] = useState([])


    function addNewStory(createdStory){
        setNewStory([...newStory,createdStory])
        }
    

    // function addNewStory(newStory){
    //         setNewStory([...newStory,newStory])
    //         }
        
  return (
    <div className='Bio-Container'>
            {/* <h1>Welcome to Proa, Tåno' y Chamoru</h1> */}
            <h2>We are so glad you're here, thank you for visiting our site and sharing in our story.  </h2>
            <h2>Proa </h2>
            <h2>Tåno' y Chamoru </h2>
            <p></p>
            <p></p>
        <div className='New-Story'>
        <NewStory addNewStory={addNewStory}/>
        </div>
    </div>
  )
}
