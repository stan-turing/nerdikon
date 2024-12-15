import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NerdikonCard.css';
import fallbackImage from '../assets/images/Explainer-thumbnail.svg';

const formatTagClass = (tagName) => {
  // Tag-Namen in Kleinbuchstaben umwandeln und Leerzeichen oder Sonderzeichen durch Bindestriche ersetzen
  return tagName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

const NerdikonCard = ({ id, title, thumbnail, tags, tagClassMap }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to:", `/articles/${id}`);
    navigate(`/articles/${id}`); // Navigiere zur Artikel-Seite mit der ID
  };

  return (
    <div className="card" onClick={handleClick} role='button' tabIndex={0}>
      <img
        src={thumbnail?.url ? `${API_URL}/uploads${thumbnail.url}` : fallbackImage}
        alt={`${title} Bild`}
        className="card-thumb"
      />
      <h2 className="card-title">{title || 'No title available'}</h2>
      <div className="card-tags">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <span
              key={tag.id}
              className={`tag ${formatTagClass(tag.tag) || 'default-tag'}`}
              style={{ backgroundColor: tag.color || '#999' }}
            >
              {tag.tag}
            </span>
          ))
        ) : (
          <span className="tag default-tag">No tags available</span>
        )}
      </div>
    </div>
  );
};

export default NerdikonCard;
