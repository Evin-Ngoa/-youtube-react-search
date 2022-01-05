import React from "react";

const VideoDetail = ({ video }) => {

    const title = video ? video.snippet.title : '';
    
    return <div>{title}</div>
}

export default VideoDetail;