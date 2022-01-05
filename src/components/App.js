import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{
    state = { videos: [] }

    handleSearchTermSubmit = async searchTerm => {
 
        const response = await youtube.get('/search',{
            params:{
                q: searchTerm
            }
        });

        // update video state
        this.setState({videos: response.data.items})
    }

    render(){
        return (
        <div className="ui container"> 
            <SearchBar handleSearchTermSubmit = {this.handleSearchTermSubmit} />
            {this.state.videos.length} videos found
        </div>
        )
    }
}

export default App;