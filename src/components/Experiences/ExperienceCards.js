import React, {useEffect, useState} from 'react'
import './Experience.css'
import ExperienceItem from './ExperienceItem'

function ExperienceCards() {
    const [experiences, setExperiences] = useState([])

    const urlExpInitial = "https://marinero.mx/api/tour/search"

    const fetchExperiences = async () =>{
        fetch(urlExpInitial)
            .then(response => response.json())
            .then(data => setExperiences(data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchExperiences(urlExpInitial)
    }, [])

  return (
    <>
      <div className="cardsExpCss">
        <div className="container">
          <h1 className='text-center title__Section'>EXPERIENCIAS</h1>
          <h4 className='text-center mb-4 subtitle__Section'>¡Redescubre lo tradicional!</h4>
          <ExperienceItem ExpItem={experiences} />
        </div>
      </div>
    </>
  );
}

export default ExperienceCards
