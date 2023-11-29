import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
               <img src="https://marinero.mx/uploads/recursos_etapa_2/svg/Recurso%20140.svg" alt="marineromx" />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Inicio
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/embarcaciones' className='nav-links' onClick={closeMobileMenu}>
                        Embarcaciones
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/experiencias' className='nav-links' onClick={closeMobileMenu}>
                        Experiencias
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/caonviertete-en-capitan' className='nav-links' onClick={closeMobileMenu}>
                        Conviértete en Capitán
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                        Blog
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/acceso' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Acceso
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Acceso</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
