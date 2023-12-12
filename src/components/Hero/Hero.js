import React, { useState } from 'react';
import BoatsForm from './BoatsForm';
import ToursForm from './ToursForm';
import './Hero.css';
import BoatImg from '../Assets/boat.png'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('embarcaciones');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="hero-search row">
      <div className="col-sm-12 col-md-6 formSearchs">
        <div>
          <button
            className={activeTab === "embarcaciones" ? "button-active" : ""}
            onClick={() => handleTabChange("embarcaciones")}
          >
            Embarcaciones
          </button>
          <button
            className={activeTab === "experiencias" ? "button-active" : ""}
            onClick={() => handleTabChange("experiencias")}
          >
            Experiencias
          </button>
        </div>
        {activeTab === "embarcaciones" ? <BoatsForm /> : <ToursForm />}
      </div>
      <div className="col-sm-12 col-md-6 textHero">
        <h2>Renta de Embarcaciones</h2>
        <h4>A un click de la Aventura</h4>
        <img src={BoatImg} />
      </div>
    </div>
  );
};

export default Hero;