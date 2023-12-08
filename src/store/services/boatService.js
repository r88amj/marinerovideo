import { getBoats } from './apiServices';

// Llamada a la función getBoats
getBoats()
  .then(response => {
    // Imprimir la respuesta en la consola
    console.log('Respuesta de getBoats:', response.data);
  })
  .catch(error => {
    // Manejar errores en caso de que la llamada falle
    console.error('Error en getBoats:', error);
  });