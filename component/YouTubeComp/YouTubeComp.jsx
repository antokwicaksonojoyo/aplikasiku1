import React from "react";
import './YouTubeComp.css';


var YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src= "https://i9.ytimg.com/vi/eZyYNG8X2xY/mqdefault.jpg?v=5fce27e9&sqp=CJy5tIsG&rs=AOn4CLCnNosY_QVd1xv71hCIb8CCBc83Rw" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time:'00.00',
    title:'title here',
    desc:'desc'
}

export default YouTubeComp;