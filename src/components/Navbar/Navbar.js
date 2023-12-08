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
