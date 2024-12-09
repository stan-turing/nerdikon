import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => (
  <div className="search-container">
    <input
      type="text"
      className="search-bar"
      placeholder="Was willst du wissen?"
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

export default SearchBar;
