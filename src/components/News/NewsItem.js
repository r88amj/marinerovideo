import React from 'react';

const NewsItem = ({ news }) => {
  const { title, content, image_url, category, author, url } = news;

  return (
    <div className="news-card">
      <img src={image_url} alt={title} />
      <div className="card-content-news">
        <h5 className='news-title'>{title}</h5>
        <p className='news-content'>{content}</p>
        <p>Categoría: {category.name}</p>
        <p>Autor: {author.display_name}</p>
        <a className='news-url' href={url} target="_blank" rel="noopener noreferrer">Leer más</a>
      </div>
    </div>
  );
};

export default NewsItem;
