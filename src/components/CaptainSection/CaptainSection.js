import React from 'react';
import './CaptainSection.css';
import Captain from '../Assets/captain.png';
import ImgDiv from '../Assets/beach.gif';

function CaptainSection() {
  return (
    <div className="captain--section flex">
      <div className="row gap-3">
        <div className="col-sm-12 col-md-6">
          <div className="mainText">
            <h1>¿Eres propietario de una embarcación?</h1>
            <p className="subText">
              Puedes ganar ingresos mensuales al registrarte con nosotros.
            </p>
            <button className='btn-primary btnCaptain'>Conviértete en Capitán</button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
        <div className="captainImages">
          <div className="imgDiv">
            {/* Agrega el estilo para posicionar la imagen del div */}
            <img
              src={ImgDiv}
              alt="imgDiv"
              style={{ position: "relative", zIndex: 1 }}
            />

            {/* Agrega el estilo para posicionar la imagen del yate sobre la imagen del div */}
          </div>
          <img src={Captain} alt="yatch" className="yatch" />
        </div>
      </div>
      </div>

    </div>
  );
}

export default CaptainSection;
