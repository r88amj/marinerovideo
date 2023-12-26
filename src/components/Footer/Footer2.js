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
            {/*  <div className="social--media--icons">
              <a href="https://www.facebook.com/mxmarinero">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/marinero.mx">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/marineromx">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.youtube.com/@marineromx">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="https://www.tiktok.com/@marineromx.oficial">
                <i class="fa-brands fa-tiktok"></i>
              </a>
  </div>*/}
            <ul class="wrapper">
              <li class="icon facebook">
                <span class="tooltip">Facebook</span>
                <span>
                  <a href="https://www.facebook.com/mxmarinero">
                    <i class="fab fa-facebook-f"></i>{" "}
                  </a>
                </span>
              </li>
              <li class="icon twitter">
                <span class="tooltip">X</span>
                <span>
                  <a href="https://twitter.com/marineromx">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                </span>
              </li>
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <span>
                  <a href="https://www.instagram.com/marinero.mx">
                    <i class="fab fa-instagram"></i>
                  </a>
                </span>
              </li>
              <li class="icon github">
                <span class="tooltip">TikTok</span>
                <span>
                  <a href="https://www.tiktok.com/@marineromx.oficial">
                    <i class="fab fa-tiktok"></i>
                  </a>
                </span>
              </li>
              <li class="icon youtube">
                <span class="tooltip">Youtube</span>
                <span>
                  <a href="https://www.youtube.com/@marineromx">
                    <i class="fab fa-youtube"></i>
                  </a>
                </span>
              </li>
            </ul>
            <div className="footer--stores">
              <a href="https://play.google.com/store/apps/details?id=com.marinero.mx&pli=1">
                <img src={Playstore} alt="google" />
              </a>
              <a href="https://apps.apple.com/mx/app/marinero-mx/id6443705796">
                <img src={Appstore} alt="apple" />
              </a>
            </div>
          </div>
          <div className="col-12 links--marinero-head">
            <div className="row links--marinero">
              <div className="col-sm-12 col-md-3 links--marinero--web">
                <h2>Empresa</h2>
                <a href="https://marinero.mx/page/nosotros">¿Quiénes Somos?</a>
                <a href="https://marinero.mx/news">Blog</a>
                <a href="https://marinero.mx/page/preguntas-frecuentes">
                  Preguntas Frecuentes
                </a>
                <a href="https://marinero.mx/page/como-funciona">
                  ¿Cómo Funciona?
                </a>
              </div>
              <div className="col-sm-12 col-md-3 links--marinero--web">
                <h2>Legal</h2>
                <a href="https://marinero.mx/page/terminos-y-condiciones">
                  Términos y Condiciones
                </a>
                <a href="https://marinero.mx/page/politica-de-privacidad">
                  Pólitica de Privacidad
                </a>
                <a href="https://marinero.mx/page/politicas-de-cancelacion-y-devoluciones">
                  Pólitica de Cancelaciones y Devoluciones
                </a>
              </div>
              <div className="col-sm-12 col-md-3 links--marinero--web">
                <h2>Contáctanos</h2>
                <p>Llámanos</p>
                <a href="https://api.whatsapp.com/send?phone=+52 999 591 2310&text=Hola, Marinero | ¡Necesito más información!"target="_blank"  rel="noreferrer">+52 999 591 2310</a>
                <p>Escríbenos</p>
                <a href="mailto:hola@marinero.mx?Subject=Hola%20Marinero%20|%20¡Estoy%20interesado%20en%20que%20se%20contacten%20conmigo!">
                  hola@marinero.mx
                </a>
              </div>
              <div className="col-sm-12 col-md-3 img--footer">
                <img src={Pescadito} alt="pescado" />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <small className="website-rights">© 2023 por marinero.mx</small>
          <div className="payment-methods">
            <li className="payment-methods-icon">
              <img src={Mercado} alt="MercadoPago" />
            </li>
            <li className="payment-methods-icon">
              <img src={Amex} alt="AMEX" />
            </li>
            <li className="payment-methods-icon">
              <img src={Visa} alt="Visa" />
            </li>
            <li className="payment-methods-icon">
              <img src={Master} alt="MasterCard" />
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer2
