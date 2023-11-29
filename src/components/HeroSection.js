import React from 'react'
import '../App.css'
import './HeroSection.css'
import { Button } from './Button'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-hero.mp4' autoPlay muted loop />
      <h1>Renta de Embarcaciones</h1>
      <p>A un click de la Aventura</p>
      <div className='hero-btns'>
        <Button 
        className='btns' 
        buttonStyle='btn--outline' 
        buttonSize='btn--large'>
            Comenzar
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
