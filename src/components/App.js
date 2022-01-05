import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{
    handleSearchTermSubmit = async (searchTerm) => {
        console.log(searchTerm);
        const response = await youtube.get('/search',{
            params:{
                q: searchTerm
            }
        });

        console.log(response);
        console.log(response.data.items);
    }

    render(){
        return (
        <div className="ui container"> 
            <SearchBar handleSearchTermSubmit = {this.handleSearchTermSubmit} />
        </div>
        )
    }
}

export default App;