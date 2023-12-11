import React, {useEffect, useState} from 'react'
import BoatItem from './BoatItem'
import './BoatsCards.css'

function BoatsCards() {
    const [boats, setBoats] = useState([])

    const urlBoatsInitial = "https://marinero.mx/api/boat/search"

    const fetchBoats = async () =>{
        fetch(urlBoatsInitial)
            .then(response => response.json())
            .then(data => setBoats(data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchBoats(urlBoatsInitial)
    }, [])

  return (
    <>
      <div className="cardsBoatsCs">
        <div className="container">
          <h1 className='text-center title__Section'>EMBARCACIONES</h1>
          <h4 className='text-center mb-4 subtitle__Section'>¡Selección destacada por la comunidad!</h4>
          <BoatItem boatItem={boats} />
        </div>
      </div>
    </>
  );
}

export default BoatsCards;
