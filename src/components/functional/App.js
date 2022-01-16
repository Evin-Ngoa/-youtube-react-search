import React, { useState, useEffect } from "react";
import Divider from "../Divider";
import VideoDetail from "../VideoDetail";
import VideoList from "../VideoList";
import SearchBar from "./SearchBar";
import useVideos from "./hooks/api/useVideos";

const App = ({ handleSearchTermSubmit }) => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, searchVideo] = useVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container"> 
            <SearchBar handleSearchTermSubmit = {searchVideo} />
            <Divider results={videos} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList
                        videos={videos} 
                        handleVideoSelect={setSelectedVideo}
                        />
                     </div>
                </div>
            </div>
        </div>
        )
}

export default App;

