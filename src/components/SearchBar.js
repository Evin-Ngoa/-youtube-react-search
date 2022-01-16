import React from "react";

class SearchBar extends React.Component{

    state = {searchTerm : ''};

    handleInputChange = (event) => {
        this.setState({searchTerm : event.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        this.props.handleSearchTermSubmit(this.state.searchTerm);
    }

    render(){
        return (
        <div className="search-bar ui segment">
            <form onSubmit={this.handleFormSubmit} className="ui form">
                <div className="ui fluid icon input">
                    {/* <label>Video Search</label> */}
                    <input type="text" 
                    value={this.state.searchTerm}
                    placeholder="start typing then press enter"
                    onChange={this.handleInputChange}
                    />
                    <i className="search icon"></i>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;