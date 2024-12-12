import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => (

  <div className="nerdikon-search-container">
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Was willst du wissen?"
        onChange={(e) => onSearch(e.target.value)}
      />
      <select 
        className="category-filter"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">Kategorie</option>
        <option value="Netzwerktechnik">Netzwerktechnik</option>
        <option value="Netzwerksicherheit">Netzwerksicherheit</option>
      </select>
      <select 
        className="tag-filter"
        onChange={(e) => onTagChange(e.target.value)}
      >
        <option value="all">Tag</option>
        <option value="Netzwerktechnik">Netzwerktechnik</option>
        <option value="Netzwerksicherheit">Netzwerksicherheit</option>
      </select>
    </div>
  </div>
);

export default SearchBar;
