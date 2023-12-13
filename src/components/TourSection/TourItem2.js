import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function TourItem2() {
    const urlTour = "https://marinero.mx/tour/"

  const [tourItems, setTourItems] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2600 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 2600, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 460 },
      items: 2,
    },
    mobile: {
      breakpoint: { max:459, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const urlToursInitial = 'https://marinero.mx/api/tour/search';

    const fetchTours = async () => {
      try {
        const response = await fetch(urlToursInitial);
        const data = await response.json();
        setTourItems(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTours();
  }, []);

  return (
    <div>
      <Carousel 
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      containerClass="carousel-container"
      autoPlaySpeed={3000}>
        {tourItems.map((tour, index) => (
          <div key={index} className="tour-card" style={{ backgroundImage: `url(${tour.image})` }}>
          <div className="card-content">
            <h3>{tour.title}</h3>
            <p>{tour.location.name}</p>
            <p>Desde ${tour.price} MXN</p>
            <a href={urlTour + tour.slug} target='blank' className='btn--primary'>Conoce más</a>
          </div>
        </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TourItem2;
