import React from 'react'
import "./Footer2.css"
import Promociones from '../Assets/obtenga_promociones_es.png'
import LogoAzul from '../Assets/barco_azul.svg'
import Appstore from '../Assets/AppStore.webp'
import Playstore from '../Assets/Playstore.webp'
import Pescadito from '../Assets/pescadito_con_mar_y_m.svg'
import Amex from '../Assets/amex.svg'
import Mercado from '../Assets/MercadoPago.svg'
import Visa from '../Assets/visa.svg'
import Master from '../Assets/master.svg'

function Footer2() {
  return (
    <div className="footer--wrapper">
      <section className="footer-subscription">
        <div className="row row--promociones">
          <div className="col-sm-12 col-md-6 img--promociones">
            <img src={Promociones} alt="promociones" className="img-fluid" />
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="input-areas">
              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  className="footer-input"
                />
                <button className="subscribe--button">Suscríbete</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="footer--links">
        <div className="row footer-links-wrapper">
          <div className="col-12 logo--social--stores">
            <img src={LogoAzul} alt="logo_azul" className="logo--azul" />
            <h5>Síguenos</h5>
            <div className="social--media--icons">
              <a href="/">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </div>
            <div className="footer--stores">
              <img src={Playstore} alt="google" />
              <img src={Appstore} alt="apple" />
            </div>
          </div>
          <div className='col-12 links--marinero-head'>
            <div className='row links--marinero'>
              <div className='col-sm-12 col-md-3 links--marinero--web'>
                <h2>Empresa</h2>
                <a href="/">¿Quiénes Somos?</a>
                <a href="/">Blog</a>
                <a href="/">Preguntas Frecuentes</a>
                <a href="/">¿Cómo Funciona?</a>
              </div>
              <div className='col-sm-12 col-md-3 links--marinero--web'>
                <h2>Legal</h2>
                <a href="/">Términos y Condiciones</a>
                <a href="/">Pólitica de Privacidad</a>
                <a href="/">Pólitica de Cancelaciones y Devoluciones</a>
              </div>
              <div className='col-sm-12 col-md-3 links--marinero--web'>
                <h2>Contáctanos</h2>
                <p>Llámanos</p>
                <a href="/">+52 999 591 2310</a>
                <p>Escríbenos</p>
                <a href="/">hola@marinero.mx</a>
              </div>
              <div className='col-sm-12 col-md-3'>
                <img src={Pescadito} alt='pescado' />              </div>
            </div>
          </div>
        </div>
        <div className='row copyright'>
          <small className="website-rights">© 2023 por marinero.mx</small>
          <div className="payment-methods">
            <li className="payment-methods-icon">
              <img
                src={Mercado}
                alt="MercadoPago"
              />
            </li>
            <li className="payment-methods-icon">
              <img
                src={Amex}
                alt="AMEX"
              />
            </li>
            <li className="payment-methods-icon">
              <img
                src={Visa}
                alt="Visa"
              />
            </li>
            <li className="payment-methods-icon">
              <img
                src={Master}
                alt="MasterCard"
              />
            </li>
          </div>
          </div>
        </div>
      </div>
  );
}

export default Footer2
