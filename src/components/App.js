import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Divider from './Divider';

class App extends React.Component{
    state = { videos: [], selectedVideo: null }

    handleSearchTermSubmit = async searchTerm => {
 
        const response = await youtube.get('/search',{
            params:{
                q: searchTerm
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render(){
        return (
        <div className="ui container"> 
            <SearchBar handleSearchTermSubmit = {this.handleSearchTermSubmit} />
            <Divider results={this.state.videos} />
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