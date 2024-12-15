import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import NerdikonCard from '../components/NerdikonCard';
import Footer from '../components/Footer';
import SearchCardBox from '../components/SearchCardBox';
import NerdikonSearchHeader from '../components/NerdikonSearchHeader';
import { fetchEntries, API_URL } from '../api';

const tagClassMap = {
  Sicherheit: 'sicherheit',
  Netzwerk: 'netzwerk',
  Entwicklung: 'entwicklung',
};

export default function Homepage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredEntries = entries.filter(entry =>
    (selectedTag === '' || entry.tags.some(tag => tag.tag === selectedTag)) &&
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];
  //Daten von Strapi laden
  useEffect(() => {
    const getEntries = async () => {
      try {
        setLoading(true);
        const data = await fetchEntries();
        console.log('Fetched Entries:', data);
        
        data.data.forEach(entry => {
          console.log("Entry:", entry);
          console.log("Thumbnail:", entry.thumbnail);
          const thumbnailURL = entry.thumbnail?.url
          ? `${API_URL}/uploads${entry.thumbnail.url}`
          : "../assets/images/Explainer-thumbnail.svg"; // Fallback, wenn kein Thumbnail vorhanden ist
        });
        setEntries(data.data || []);
      } catch (error) {
        console.error('Fehler beim Abrufen der Einträge:', error.message);
        console.log("Thumbnail Object:", entry.thumbnail);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getEntries();
  }, []);

  // Fehler oder Ladezustand behandeln
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {error}</p>;
  if (entries.length === 0) return <p>No entries found.</p>;


  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <NerdikonSearchHeader />
        <SearchCardBox>
          <SearchBar
            onSearch={setSearchTerm}
            onSortChange={setSortOption}
            onTagChange={setSelectedTag}
            tagClassMap={{
              Netzwerk: '#1E90FF',
              Hardware: '#32CD32',
              Hacking: '#FF1493',
              'IT-Sicherheit': '#8A2BE2',
            }}
          />
          <div className="cards-container">
            {filteredEntries.map((entry) => {
              const thumbnail = entry.thumbnail; // Thumbnail sichern
              return (
                <NerdikonCard
                  key={entry.id}
                  id={entry.id}
                  title={entry.title}
                  thumbnail={thumbnail}
                  tags={entry.tags || []}
                  tagClassMap={tagClassMap}
                />
              );
            })}
          </div>
        </SearchCardBox>
      </main>
      <Footer />
    </div>
  );
}
