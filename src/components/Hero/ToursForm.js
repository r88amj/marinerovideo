import React, { useState, useEffect } from 'react';

function ToursForm() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    // Fetch locations from the API
    fetch('https://marinero.mx/api/locations')
      .then(response => response.json())
      .then(data => setLocations(data.data))
      .catch(error => console.error('Error fetching locations:', error));
  }, []);

  const handleLocationChange = event => {
    setSelectedLocation(event.target.value);
  };

  const handleDateChange = event => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Perform any action with selectedLocation and selectedDate, e.g., send to server
    console.log('Selected Location:', selectedLocation);
    console.log('Selected Date:', selectedDate);
  };

  return (
    <div className="form--boats">
      <form className="formBoat" onSubmit={handleSubmit}>
        <label>¿Dónde comienza tu aventura?</label>
        <select
          className="locationBoat"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="">Seleccione una ubicación</option>
          {locations.map((location) => (
            <option key={location.id} value={location.title}>
              {location.title}
            </option>
          ))}
        </select>
        <br />
        <label>Fecha de inicio</label>
        <input
          className="dateSearch"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />

        <br />
        <button className="btn-primary" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default ToursForm;
