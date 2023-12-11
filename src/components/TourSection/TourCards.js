import React, {useState, useEffect} from 'react'
import './TourCards.css'

import TourItem2 from './TourItem2'
function TourCards() {
    const [tours, setTours] = useState([])

    const urlToursInitial = "https://marinero.mx/api/tour/search"

    const fetchTours = async () =>{
        fetch(urlToursInitial)
            .then(response => response.json())
            .then(data => setTours(data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchTours(urlToursInitial)
    }, [])

  return (
    <>
      <div className="cardsTours">
        <div className="container">
          <h1 className="text-center title__Section">EXPERIENCIAS</h1>
          <h4 className="text-center mb-4 subtitle__Section">
          ¡Redescubre lo tradicional!
          </h4>
          {/*<TourItem tourItem={tours}/>*/}
          <TourItem2 tourItem={tours}/>
        </div>
      </div>
    </>
  );
}

export default TourCards
