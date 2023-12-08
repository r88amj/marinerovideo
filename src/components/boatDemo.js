// Supongamos que este es un componente de React
import { getBoats } from '../store/services/apiServices';
import React, { useEffect, useState } from 'react';

const BoatList = () => {
  const [boats, setBoats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBoats()
      .then(response => {
        console.log('Response from getBoats:', response.data);

        // Verificamos si hay un array llamado 'data' en la respuesta
        const boatsArray = Array.isArray(response.data.data) ? response.data.data : [];

        // Seleccionamos aleatoriamente 5 embarcaciones del array original
        const randomlySelectedBoats = selectRandomBoats(boatsArray, 9);

        setBoats(randomlySelectedBoats);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error in getBoats:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  console.log('Boats:', boats);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Listado de Barcos Aleatorios</h2>
      <ul>
        {boats.map(boat => (
          <li key={boat.id}>{boat.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Función para seleccionar aleatoriamente n elementos de un array
function selectRandomBoats(array, n) {
  const newArray = [...array];
  const randomlySelected = [];

  while (randomlySelected.length < n && newArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    randomlySelected.push(newArray.splice(randomIndex, 1)[0]);
  }

  return randomlySelected;
}

export default BoatList;
