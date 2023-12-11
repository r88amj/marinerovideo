import React from "react";
import "./Footer.css";
import Appstore from '../Assets/AppStore.webp'
import Playstore from '../Assets/Playstore.webp'

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <h1 className="footer-sibscription-heading">
          ¡Obtenga Promociones y más!
        </h1>
        <h5 className="footer-subscription-text">
          Recibe las mejores ofertas en tu <span>correo...</span>
        </h5>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              className="footer-input"
            />
            <button className="btn--outline subscribe--button">
              Suscríbete
            </button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-links-items">
            <h2>Empresa</h2>
            <a href="/">¿Quiénes Somos?</a>
            <a href="/">Blog</a>
            <a href="/">Preguntas Frecuentes</a>
            <a href="/">¿Cómo Funciona?</a>
          </div>
          <div className="footer-links-items">
            <h2>Legal</h2>
            <a href="/">Términos y Condiciones</a>
            <a href="/">Política de Privacidad</a>
            <a href="/">Política de Cancelaciones y Devoluciones</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-links-items">
            <h2>Contáctanos</h2>
            <p>Llámanos</p>
            <a href="/">+59 999 591 2310</a>
            <p>Llámanos</p>
            <a href="/">hola@marinero.mx</a>
          </div>
          <div className="footer-links-items">
            <h2>Síguenos</h2>
            <div className="social-icons">
              <a href="/">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-square-x-twitter"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </div>
            <div className="stores">
              <img src={Playstore} alt="google"/>
              <img src={Appstore} alt="apple"/>
            </div>
          </div>
        </div>
      </div>
      <section className="footer-logo">
        <div className="footer-logo-wrapper">
          <div className="footer__logo">
            <a href="/" className="logo--footer">
              <img
                src="https://marinero.mx/uploads/recursos_etapa_2/svg/barco_azul.svg"
                alt="logo"
              />
            </a>
          </div>
          <small className="website-rights">© 2023 por marinero.mx</small>
          <div className="payment-methods">
            <li className="payment-methods-icon">
              <img
                src="https://marinero.mx/uploads/recursos_etapa_2/svg/MercadoPago.svg"
                alt="MercadoPago"
              />
            </li>
            <li className="payment-methods-icon">
              <img
                src="https://marinero.mx/uploads/recursos_etapa_2/svg/amex.svg"
                alt="AMEX"
              />
            </li>
            <li className="payment-methods-icon">
              <img
                src="https://marinero.mx/uploads/recursos_etapa_2/svg/visa.svg"
                alt="Visa"
              />
            </li>
            <li className="payment-methods-icon">
              <img
                src="https://marinero.mx/uploads/recursos_etapa_2/svg/master.svg"
                alt="MasterCard"
              />
            </li>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
