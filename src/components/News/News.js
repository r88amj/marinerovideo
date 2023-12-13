import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import './News.css';

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Lógica para obtener datos de la API (puedes usar axios, fetch, etc.)
    fetch('https://marinero.mx/api/news')
      .then(response => response.json())
      .then(data => setNewsData(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente

  // Obtener solo los primeros 5 elementos del array
  const recentNews = newsData.slice(0, 4);

  const removeTags = (html) => {
    // Utilizar una expresión regular para eliminar las etiquetas HTML
    return html.replace(/<p>|<\/p>/g, '');
  };

  return (
    <div className='news-wrapper'>
        <h1>Noticias más recientes</h1>
        <div className="news-section">
      {recentNews.map(newsItem => (
        <NewsItem key={newsItem.id} news={{...newsItem, content: removeTags(newsItem.content)}} />
      ))}
    </div>
    </div>

  );
};

export default News;
