import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = { videos: [], selectedVideo: null }

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
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                    <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className='five wide column'>
                    <VideoList 
                    videos={this.state.videos} 
                    handleVideoSelect={this.handleVideoSelect}
                    />
                     </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;