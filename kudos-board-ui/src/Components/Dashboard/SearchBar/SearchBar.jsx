import React from "react";
import "./SearchBar.css";

function SearchBar({ searchInputValue, handleOnSearchInputChange }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                name="search"
                placeholder="Search Boards..."
                value={searchInputValue}
                onChange={handleOnSearchInputChange}
            />
            <i className="material-icons search-icon">search</i>
        </div>
    );
}

export default SearchBar;
