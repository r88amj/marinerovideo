import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShip, faUmbrellaBeach, faAnchor, faFile, faUser} from '@fortawesome/free-solid-svg-icons';
import ModalLogin from '../../components/ModalLogin/ModalLogin';
import './NavigationBar.css'

const NavigationBar = () => {
  const [show, setShow] = useState(false);
      
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { id: 1, label: 'Inicio', icon: faHome, url:'/' },
    { id: 2, label: 'Embarcaciones', icon: faShip, url:'https://marinero.mx/boat?_layout=map' },
    { id: 3, label: 'Experiencias', icon: faUmbrellaBeach, url:'https://marinero.mx/tour?_layout=map' },
    { id: 4, label: 'Conviértete en Capitán', icon: faAnchor, url:'https://marinero.mx/page/conviertete-en-capitan' },
    { id: 5, label: 'Blog', icon: faFile, url:'https://marinero.mx/news' },
  ];

  return (
    <>
    <div className={`navigation-bar ${isMobile ? 'fixed-bottom' : ''}`}>
     <div className='navbar-conatiner'>
  
        {/* Contenido de la barra de navegación */}
        <ul className='nav-menu'>
        <a href="/" className='navbar-logo'>
          <img src="https://marinero.mx/uploads/recursos_etapa_2/svg/marinero_logo_large.svg" alt="marineromx" />
        </a>
          {navItems.map((item) => (
            <li key={item.id}>
              {isMobile ? (
                <a href={item.url} className='nav-links'>
                <FontAwesomeIcon icon={item.icon} />
                </a>
              ) : (
                <a href={item.url} className='nav-links'>
                <span>{item.label}</span>
                </a>
              )}
            </li>
          ))}
          <li className='noHover'>
            {isMobile ? (
              <button  className='nav-links btn--outline' onClick={handleShow}>
                <FontAwesomeIcon icon={faUser} />
              </button>
            ) : (
              <button className='btn--outline' onClick={handleShow}>Acceso</button>
            )}
          </li>
        </ul>
     </div>
    </div>
    <ModalLogin show={show} handleClose={handleClose}/>
    </>
  );
};

export default NavigationBar;
