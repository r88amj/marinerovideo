import React from 'react'

const urlTour = "https://marinero.mx/tour/"

// Función para mezclar aleatoriamente un array (algoritmo de Fisher-Yates)
const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };
  
  const TourItem = ({ tourItem = [] }) => {
    // Mezcla aleatoria de los elementos
    const shuffledTourItem = shuffleArray(tourItem.slice()); // Hacer una copia para no modificar el array original
  
    return (
      <div className="tour-list">
        {shuffledTourItem.slice(0, 4).map((item, index) => (
          <div key={index} className="tour-card" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.location.name}</p>
              <p>Desde ${item.price} MXN</p>
              <a href={urlTour + item.slug} target='blank' className='btn--primary'>Conoce más</a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default TourItem;
