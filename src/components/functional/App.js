import React, { useState, useEffect } from "react";
import Divider from "../Divider";
import VideoDetail from "../VideoDetail";
import VideoList from "../VideoList";
import SearchBar from "./SearchBar";

const App = ({ handleSearchTermSubmit }) => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    //composerDidMount Run only once
    useEffect( () => {
        handleSearchTermSubmit('buildings');
    }, []);

    const handleSearchTermSubmit = async searchTerm => {
        const response = await youtube.get('/search',{
            params:{
                q: searchTerm
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    return (
        <div className="ui container"> 
            <SearchBar handleSearchTermSubmit = {handleSearchTermSubmit} />
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

