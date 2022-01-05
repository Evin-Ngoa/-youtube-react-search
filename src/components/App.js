import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component{
    state = { videos: [], selectedVideo: {} }

    handleSearchTermSubmit = async searchTerm => {
 
        const response = await youtube.get('/search',{
            params:{
                q: searchTerm
            }
        });

        this.setState({videos: response.data.items})
    }

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render(){
        return (
        <div className="ui container"> 
            <SearchBar handleSearchTermSubmit = {this.handleSearchTermSubmit} />
            {this.state.videos.length} videos found
            <VideoList 
            videos={this.state.videos} 
            handleVideoSelect={this.handleVideoSelect}
            />
        </div>
        )
    }
}

export default App;