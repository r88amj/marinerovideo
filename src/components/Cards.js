import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>EMBARCACIONES</h1>
      <h4>¡Selección destacada por la comunidad!</h4>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='images/boat-1.jpg'
                text='Sea Hunter | Tiara 39 Open'
                label='Progreso'
                Path='/Embarcaciones'
                />
                <CardItem 
                src='images/boat-2.jpg'
                text='Duque | Pursuit 325'
                label='Progreso'
                Path='/Embarcaciones'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem 
                src='images/boat-3.jpg'
                text='RENTA PADDLE BOARD A DOMICILIO'
                label='Progreso'
                Path='/Embarcaciones'
                />
                <CardItem 
                src='images/boat-4.jpg'
                text='Moto acuática seadoo'
                label='Progreso'
                Path='/Embarcaciones'
                />
                <CardItem 
                src='images/boat-5.jpg'
                text='Moto acuática Yamaha'
                label='Progreso'
                Path='/Embarcaciones'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
