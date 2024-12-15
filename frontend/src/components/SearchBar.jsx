import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onSortChange, onTagChange, tagClassMap }) => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [tagDropdownOpen, setTagDropdownOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortOrder, setSortOrder] = useState('A-Z');

  // Logik zum Hinzufügen/Entfernen von Tags
  // const toggleTag = (tag) => {
  //   const updatedTags = selectedTags.includes(tag)
  //     ? selectedTags.filter((t) => t !== tag)
  //     : [...selectedTags, tag];

  //   setSelectedTags(updatedTags);
  //   onTagChange(updatedTags);
  // };

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag); // Tag abwählen
      } else {
        return [...prevTags, tag]; // Tag hinzufügen
      }
    });
  };

  // Sortierung ändern und Parent-Komponente benachrichtigen
  const handleSortChange = (order) => {
    setSortOrder(order);
    onSortChange(order); // SortOrder an Parent-Komponente senden
  };

  // Tags und Sortieroptionen definieren
  const tags = [
    { tag: 'Netzwerk', color: tagClassMap?.['Netzwerk'] || '#1E90FF' },
    { tag: 'Hardware', color: tagClassMap?.['Hardware'] || '#32CD32' },
    { tag: 'Hacking', color: tagClassMap?.['Hacking'] || '#FF1493' },
    { tag: 'IT-Sicherheit', color: tagClassMap?.['IT-Sicherheit'] || '#8A2BE2' },
  ];

  const sortOptions = ['A-Z', 'Z-A', 'Newest', 'Oldest'];

  return (
    <div className="nerdikon-search-container">
      <div className="search-container">
        {/* Suchfeld */}
        <input
          type="text"
          className="search-bar"
          placeholder="Was willst du wissen?"
          onChange={(e) => onSearch(e.target.value)}
        />

        {/* Sortier-Dropdown */}
        <div className="sort-dropdown-container">
          <button
            className="sort-filter"
            onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
          >
            Sortieren nach
          </button>
          {sortDropdownOpen && (
            <div className="sort-dropdown">
              {sortOptions.map((order) => (
                <label key={order} className="sort-option">
                  <input
                    type="radio"
                    name="sortOrder"
                    value={order}
                    checked={sortOrder === order}
                    onChange={() => handleSortChange(order)}
                  />
                  {order}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Tag-Dropdown */}
        <div className="tag-dropdown-container">
          <button
            className="tag-filter"
            onClick={() => setTagDropdownOpen(!tagDropdownOpen)}
          >
            Tags auswählen
          </button>
          {tagDropdownOpen && (
            <div className="tag-dropdown">
              {tags.map(({ tag, color }) => (
                <label key={tag} className="tag-option" style={{ color }}>
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => toggleTag(tag)}
                  />
                  {tag}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
      <hr className="search-underline" />
    </div>
  );
};

export default SearchBar;
