import React from 'react'
import '../../App.css'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-hero.mp4' autoPlay muted loop />
      <h1>Renta de Embarcaciones</h1>
      <p>A un click de la Aventura</p>
      {/*<div className='hero-btns'>
        <Button 
        className='btns' 
        buttonStyle='btn--outline' 
        buttonSize='btn--large'>
            Comenzar
  </Button>
      </div>*/}
      <dvi className="searchForm">
        <form className='search_form'>
          <div className='text'>
            <label>¿Dónde comienza tu Aventura?</label>
            <input className='text_input' type="text" placeholder='Elige tu destino'/>
          </div>
          <div className='from'>
            <span className='border_input'></span>
            <label>Fecha de inicio</label>
            <input className='date_input' type='date'></input>
            <span className='border_input'></span>
          </div>
          <div className='search_btn'>
            <button className='btn_search'>Buscar</button>
          </div>
        </form>
      </dvi>
    </div>
  )
}

export default HeroSection
