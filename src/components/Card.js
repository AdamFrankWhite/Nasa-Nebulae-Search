import React from 'react'
import SaveImg from './SaveImg'

function Card(props) {
    const cardStyle = {
        backgroundImage: `url(${props.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }
    
    return (
        <div className={props.multi === 1 ? "single-card" : "card"} style={cardStyle}>
            
            <h3 className="img-caption">{props.caption}</h3>
            <SaveImg imgData={props.imgData} />
            <ul className="social-media">
                <a href={`http://www.facebook.com/sharer.php?u=${props.imgData[1]}`} target="_blank" rel="noopener noreferrer"><li><i className="fa fa-facebook" aria-hidden="true"></i></li></a>
                <a href={`https://twitter.com/share?url=${props.imgData[1]}&amp;text=${props.caption};hashtags=NASA`} target="_blank" rel="noopener noreferrer"><li><i className="fa fa-twitter" aria-hidden="true"></i></li></a>
                {/* <a href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());"><li><i className="fa fa-instagram" aria-hidden="true"></i></li></a> */}
                <a href={`http://reddit.com/submit?url=${props.imgData[0]}`} target="_blank" rel="noopener noreferrer" ><li><i className="fa fa-reddit" aria-hidden="true"></i></li></a>
            </ul>
        </div>
    )

}

export default Card