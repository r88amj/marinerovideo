// apiService.js
import axios from 'axios';
import {
  API_URL_DEV,
  API_URL_PRODUCTION,
  BOAT,
  BOAT_DETAIL,
  NEWS,
  TOUR,
  TOUR_DETAIL,
  LOGIN,
  REGISTER,
  LOCATIONS,
  AVAILABILITY,
  TOUR_AVAILABILITY,
  GET_WISHLIST,
  ADD_WISHLIST,
  UPDATE_USER,
  DELETE_USER,
} from '../../utils/constants/apiConstants';


const baseURL = process.env.NODE_ENV === 'production' ? API_URL_PRODUCTION : API_URL_DEV;

const api = axios.create({
  baseURL,
});
// apiService.js
export const getBoats = () => api.get(BOAT);
export const getBoatDetail = (id) => api.get(`${BOAT_DETAIL}${id}`);
export const getNews = () => api.get(NEWS);
export const getTour = () => api.get(TOUR);
export const getTourDetail = (id) => api.get(`${TOUR_DETAIL}${id}`);
export const getLogin = () => api.get(LOGIN);
export const getRegister = () => api.get(REGISTER);
export const getLocations = () => api.get(LOCATIONS);
export const getAvailability = () => api.get(AVAILABILITY);
export const getTourAvailability = () => api.get(TOUR_AVAILABILITY);
export const getWishlist = () => api.get(GET_WISHLIST);
export const addWishlist = (data) => api.post(ADD_WISHLIST, data);
export const updateUser = (id, data) => api.put(`${UPDATE_USER}/${id}`, data);
export const deleteUser = (id) => api.delete(`${DELETE_USER}/${id}`);


// Puedes exportar axios directamente si es necesario
export default api;