import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../Assets/logo.svg'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
               <img src={Logo} alt="marineromx" />
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
                    <Link to='https://marinero.mx/boat?_layout=maps' className='nav-links' onClick={closeMobileMenu}>
                        Embarcaciones
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='https://marinero.mx/tour?_layout=map' className='nav-links' onClick={closeMobileMenu}>
                        Experiencias
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='https://marinero.mx/page/conviertete-en-capitan' className='nav-links' onClick={closeMobileMenu}>
                        Conviértete en Capitán
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='https://marinero.mx/news' className='nav-links' onClick={closeMobileMenu}>
                        Blog
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                        Acceso
                    </Link>
                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
