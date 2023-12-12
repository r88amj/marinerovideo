import React, { useState, useEffect } from 'react';

function BoatsForm() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [boatTypes, setBoatTypes] = useState([]);
  const [selectedBoatType, setSelectedBoatType] = useState('');

  useEffect(() => {
    // Fetch locations from the API
    fetch('https://marinero.mx/api/locations')
      .then(response => response.json())
      .then(data => setLocations(data.data))
      .catch(error => console.error('Error fetching locations:', error));

    // Fetch boat types from the API
    fetch('https://marinero.mx/api/boat/form-search')
      .then(response => response.json())
      .then(data => setBoatTypes(data.data.find(item => item.field === 'attr').terms))
      .catch(error => console.error('Error fetching boat types:', error));
  }, []);

  const handleLocationChange = event => {
    setSelectedLocation(event.target.value);
  };

  const handleDateChange = event => {
    setSelectedDate(event.target.value);
  };

  const handleBoatTypeChange = event => {
    setSelectedBoatType(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Selected Location:', selectedLocation);
    console.log('Selected Date:', selectedDate);
    console.log('Selected Boat Type:', selectedBoatType);
    // Perform any action with selectedLocation, selectedDate, and selectedBoatType, e.g., send to server
  };

  return (
    <div className='form--boats'>
      <form className='formBoat' onSubmit={handleSubmit}>
        <label>
          ¿Dónde comienza tu aventura?
        </label>
        <select className='locationBoat' value={selectedLocation} onChange={handleLocationChange}>
          <option value="">Seleccione una ubicación</option>
          {locations.map(location => (
            <option key={location.id} value={location.title}>
              {location.title}
            </option>
          ))}
        </select>
        <br />
        <label>
          Fecha de inicio
        </label>
        <input className='dateSearch' type="date" value={selectedDate} onChange={handleDateChange} />
        <br />
        <label>
          Tipo de Embarcación
        </label>
        <select className='boatType' value={selectedBoatType} onChange={handleBoatTypeChange}>
          <option value="">Tipo de embarcación</option>
          {boatTypes.map(boatType => (
            <option key={boatType.id} value={boatType.title}>
              {boatType.title}
            </option>
          ))}
        </select>
        <br />
        <button className='btn-primary' type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default BoatsForm;
