import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos}) => {
    const videosLst = videos.map( video => {
        return <VideoItem key={video.id.videoId} video={video} />;
    })

    return <ul>{videosLst}</ul>;
}

export default VideoList;