import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { GoArrowRight } from 'react-icons/go';
import { GoArrowLeft } from 'react-icons/go';

const BoatItem = ({ boatItem = [] }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className='arrow next' onClick={onClick}>
        <GoArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className='arrow prev' onClick={onClick}>
        <GoArrowLeft />
      </div>
    );
  };

  const [ImageIndex, setImageIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3); // Estado para el número de slidesToShow

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    // Suscribirse a cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpieza del efecto cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // El efecto se ejecutará solo una vez al montar el componente

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: slidesToShow, // Utilizar el estado actualizado
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
      <div className='sliderCards'>
        <Slider {...settings}>
          {boatItem.map((item, index) => (
            <div
              key={index}
              className={index === ImageIndex ? 'slide activeSlide' : 'slide'}
            >
              <img src={item.image} alt={item.slug} />
              <h5 className='boatTitle'>{item.title}</h5>
              <h6 className='boat__location'>{item.location.name}</h6>
              <h6 className='boat__price'>Desde ${item.price} MXN</h6>
              <a className='btn btn-primary boatMore'>Más información</a>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BoatItem;
