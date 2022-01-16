import React, { useState, useEffect } from "react";
import youtube from "../../../../apis/youtube";


const useVideos = ({ defaultSerchTerm }) => {
    // output
    const [videos, setVideos] = useState([]);

    //composerDidMount Run only once
    useEffect( () => {
        handleSearch(defaultSerchTerm);
    }, []);

    // output
    const handleSearch = async searchTerm => {
        const response = await youtube.get('/search',{
            params:{
                q: searchTerm
            }
        });

        setVideos(response.data.items);
        // setSelectedVideo(response.data.items[0]);
    }

    return [
        videos,
        handleSearch
    ];

}

export default useVideos;