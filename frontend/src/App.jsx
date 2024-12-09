import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NerdikonCard from './components/NerdikonCard';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const terms = [
    { title: 'Was ist ein DNS?', category: 'Netzwerktechnik' },
    { title: 'Was ist ein DDOS Angriff?', category: 'Netzwerksicherheit' },
  ];

  const filteredTerms = terms.filter((term) =>
    term.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SearchBar onSearch={setSearchTerm} />
        <div className="cards-container">
          {filteredTerms.map((term, index) => (
            <NerdikonCard 
              key={index} 
              title={term.title} 
              category={term.category} 
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;