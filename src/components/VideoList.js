import React from "react";

const VideoList = ({videos}) => {
    const videosLst = videos.map( video => {
        return <li key={video.id.videoId}>{video.snippet.title}</li>;
    })
    return <ul>{videosLst}</ul>
}

export default VideoList;