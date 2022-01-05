import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
    return (
        <div className="video-item item"> 
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <a className="header" href="#">{video.snippet.title}</a>
                <div className="description">{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoItem;