import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

const ExperienceItem = ({ ExpItem = [] }) => {
  const urlTour = "https://marinero.mx/tour/";

  const NextArrow = ({ onClick }) => (
    <div className='arrow next' onClick={onClick}>
      <GoArrowRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className='arrow prev' onClick={onClick}>
      <GoArrowLeft />
    </div>
  );

  const [ImageIndex, setImageIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth <= 991 ? 1 : 3
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth <= 991 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: slidesToShow,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className='sliderCardsTours'>
      <Slider {...settings}>
        {ExpItem.map((item, index) => (
          <div
            key={index}
            className={index === ImageIndex ? 'slide activeSlide' : 'slide'}
          >
            <div className="image-container">
              <img src={item.image} alt={item.slug} />
              <div className="content-overlay">
                <h5 className='tour__Title'>{item.title}</h5>
                <h6 className='tour__location'>{item.location.name}</h6>
                <h6 className='tour__price'>Desde ${item.price} MXN</h6>
                <a
                  href={urlTour + item.slug}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary tour__More mt-3'
                >
                  Más información
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExperienceItem;
