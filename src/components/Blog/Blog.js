import React, { useState, useEffect } from 'react';
import './Blog.css'; // Asegúrate de ajustar la ruta correcta

const Blog = () => {
  const [newsData, setNewsData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://marinero.mx/api/news');
        const data = await response.json();
        setNewsData(data.data.slice(0, 5)); // Obtener solo los primeros 5 elementos
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex((prevIndex) => (index === prevIndex ? prevIndex : index));
  };

  return (
    <div className="wrapper-blog">
      <h1>Noticias más recientes</h1>
      <div className="container">
        {newsData.map((news, index) => (
          <React.Fragment key={news.id}>
            <input type="radio" name="slide" id={`c${news.id}`} checked={index === activeIndex} />
            <label
              htmlFor={`c${news.id}`}
              className={`card ${index === activeIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url('${news.image_url}')`,
                width: index === activeIndex ? '600px' : '80px',
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="arrow-container">
                <div className="arrow">&#8594;</div>
              </div>
              <div className="row">
                <div className="description">
                  <h5>{news.title}</h5>
                  <p className="description-content" dangerouslySetInnerHTML={{ __html: news.content }} />
                  <p><strong>Categoria:</strong> {news.category.name}</p>
                  <p><strong>Autor:</strong> {news.author.display_name}</p>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    <button className='btn-primary p-2'>Leer más</button>
                  </a>
                </div>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Blog;
