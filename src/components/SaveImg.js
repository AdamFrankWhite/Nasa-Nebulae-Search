import React from 'react'

function SaveImg(props) {
         
    return (
        <div className="saveBtn">
            <a href={props.imgData[3]} target="_blank" rel="noopener noreferrer"><span>Thumb</span></a>
            <a href={props.imgData[2]} target="_blank" rel="noopener noreferrer"><span>Small</span></a>
            <a href={props.imgData[1]} target="_blank" rel="noopener noreferrer"><span>Medium</span></a>
            <a href={props.imgData[0]} target="_blank" rel="noopener noreferrer"><span>Large</span></a>
        </div>

         // adding the event and making each click event a function, solved event bubbling issue
    )
    }


export default SaveImg