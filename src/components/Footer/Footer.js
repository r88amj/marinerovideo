import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <h1 className='footer-sibscription-heading'>
                ¡Obtenga Promociones y más!
            </h1>
            <h5 className='footer-subscription-text'>
                Recibe las mejores ofertas en tu <span>correo...</span>
            </h5>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Correo Electrónico' className='footer-input' />
                    <button className='btn--outline subscribe--button'>Suscríbete</button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-links-items'>
                    <h2>Empresa</h2>
                    <a href='/'>¿Quiénes Somos?</a>
                    <a href='/'>Blog</a>
                    <a href='/'>Preguntas Frecuentes</a>
                    <a href='/'>¿Cómo Funciona?</a>
                </div>
                <div className='footer-links-items'>
                    <h2>Legal</h2>
                    <a href='/'>Términos y Condiciones</a>
                    <a href='/'>Política de Privacidad</a>
                    <a href='/'>Política de Cancelaciones y Devoluciones</a>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-links-items'>
                    <h2>Contáctanos</h2>
                    <p>Llámanos</p>
                    <a href='/'>+59 999 591 2310</a>
                    <p>Llámanos</p>
                    <a href='/'>hola@marinero.mx</a>
                </div>
                <div className='footer-links-items'>
                    <h2>Síguenos</h2>
                    <a href='/'>Facebook</a>
                    <a href='/'>instragram</a>
                    <a href='/'>X</a>
                    <a href='/'>Youtube</a>
                    <a href='/'>TikTok</a>
                </div>
            </div>
        </div>
        <section className='footer-logo'>
            <div className='footer-logo-wrapper'>
                <div className='footer__logo'>
                    <a className='logo--footer'>
                        <img src='https://marinero.mx/uploads/recursos_etapa_2/svg/barco_azul.svg' alt='logo'/>
                    </a>
                </div>
                <small className='website-rights'>© 2023 por marinero.mx</small>
                <div className='payment-methods'>
                    <li className='payment-methods-icon'>
                        <img src='https://marinero.mx/uploads/recursos_etapa_2/svg/MercadoPago.svg' />
                    </li>
                    <li className='payment-methods-icon'>
                        <img src='https://marinero.mx/uploads/recursos_etapa_2/svg/amex.svg' />
                    </li>
                    <li className='payment-methods-icon'>
                        <img src='https://marinero.mx/uploads/recursos_etapa_2/svg/visa.svg' />
                    </li>
                    <li className='payment-methods-icon'>
                        <img src='https://marinero.mx/uploads/recursos_etapa_2/svg/master.svg' />
                    </li>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
