import React from 'react'
// import {v4 as uuid} from "uuid"

export default function NewStory({addNewStory}) {
    function handleSubmit(event){
        event.preventDefault()

        const formElement = event.target

        const storyData = {
            // id: uuid(),
            image: formElement["image"].value,
            title: formElement["title"].value,
            story: formElement["story"].value
        }
        fetch("http://localhost:3000/story",{
            method:"POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(storyData)
        })
        .then (response => response.json())
        .then (data => addNewStory(data))

        formElement.reset()
    }

    return (
        <form  className='your-story' onSubmit={handleSubmit}>
            <h2>Let's talk "story".  We hope you liked our story...tell us about YOURS!</h2>

            <input type="text" id="title" placeholder="Your Name"/>
            <input type="text" id="story" placeholder="Your Story"/>
            <input type="text" id="image" placeholder="Add a Photo" />
            <button type="submit">Share your story!</button>

        </form>
    )
}
