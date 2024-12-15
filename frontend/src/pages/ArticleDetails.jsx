import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const ArticleDetails = () => {
  const { id } = useParams(); // ID aus der URL extrahieren
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:1337/api/articles/${id}`);
        if (!response.ok) throw new Error('Artikel nicht gefunden');

        const result = await response.json();
        setArticle(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!article) return <p>Artikel nicht gefunden.</p>;

  return (
    <div className="article-details">
      <Header />
      <h1>{article.attributes.title}</h1>
      <img
        src={article.attributes.thumbnail || '../assets/images/Explainer-thumbnail.svg'}
        alt={article.attributes.title}
      />
      <p>{article.attributes.body}</p>
    </div>
  );
};

export default ArticleDetails;
