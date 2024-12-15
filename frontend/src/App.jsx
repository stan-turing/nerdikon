import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// page & layout imports
import './App.css';
import Homepage from './pages/Homepage';
import ArticleDetails from './pages/ArticleDetails';
import Category from './pages/Category';

import SiteHeader from "./components/SiteHeader";

import { fetchEntries } from "./api";

const App = () => {
  const [entries, setEntries] = useState([]); // State für API-Daten

  useEffect(() => {
    // API-Daten laden
    const loadEntries = async () => {
      try {
        const data = await fetchEntries();
        console.log(data);
        setEntries(data.data); // Strapi gibt Daten in einem `data`-Array zurück
      } catch (error) {
        console.error("Fehler beim Laden der Einträge:", error);
      }
    };

    loadEntries();
  }, []);

  return (
    <Router>
      <div className="app">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
