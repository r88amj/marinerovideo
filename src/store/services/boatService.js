import React, { useEffect, useState } from 'react';
import {
  API_URL_DEV,
  API_URL_PRODUCTION,
  AVAILABILITY,
  BOAT,
  BOAT_DETAIL,
} from '../../utils/constants/apiConstants';

const getAllBoats = async (num) => {
  const response = await fetch(`${API_URL_PRODUCTION}${BOAT}?page=${num}`);
  return await response.json();
};

const getBoats = async () => {
  const response = await fetch(`${API_URL_PRODUCTION}${BOAT}`);
  return await response.json();
};

const getBoatsCount = async () => {
  const response = await fetch(`${API_URL_PRODUCTION}${BOAT}`);
  return await response.json();
};

const searchBoat = async (term, page, urlVar) => {
  const response = await fetch(
    `${API_URL_PRODUCTION}${BOAT}?${urlVar}=${term}&page=${page}`
  );
  return response.json();
};

const getBoatById = async (id) => {
  const response = await fetch(`${API_URL_PRODUCTION}${BOAT_DETAIL}${id}`);
  return response.json();
};

const boatAvailability = async (id, start_date, start_time, day) => {
  const response = await fetch(
    `${API_URL_PRODUCTION}${AVAILABILITY}${id}?start_date=${start_date}&start_time=${start_time}&day=${day}`
  );
  return response.json();
};

const searchBoatByLocationId = async (term, page) => {
  const response = await fetch(
    `${API_URL_PRODUCTION}${BOAT}?location_id=${term}&page=${page}`
  );
  return response.json();
};

// Un ejemplo de cómo podrías usar estas funciones en un componente de React
const MyComponent = () => {
  const [boats, setBoats] = useState([]);

  useEffect(() => {
    // Llama a la función que necesites, por ejemplo:
    const fetchData = async () => {
      const data = await getBoats();
      setBoats(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Renderiza tu componente de React según la lógica y los datos obtenidos */}
      {boats.map((boat) => (
        <div key={boat.id}>{boat.name}</div>
      ))}
    </div>
  );
};

export default MyComponent;
