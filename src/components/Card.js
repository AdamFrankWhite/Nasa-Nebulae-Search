import React from 'react'

function Card(props) {
    const cardStyle = {
        backgroundImage: `url(${props.src})`,
        backgroundPosition: "center"
    }
    
    return (
        <div className="card" style={cardStyle}>
            {/* <img src={props.src}/> */}
            <h3 className="img-caption">{props.caption}</h3>
        </div>
    )

}

export default Card