import React, { useState } from "react";


const SearchBar = ({ handleSearchTermSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSearchTermSubmit(searchTerm);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={handleFormSubmit} className="ui form">
                <div className="ui fluid icon input">
                    <input type="text" 
                    value={searchTerm}
                    placeholder="start typing then press enter"
                    onChange={(event) => setSearchTerm(event.target.value)}
                    />
                    <i className="search icon"></i>
                </div>
            </form>
        </div>
        );

}

export default SearchBar;