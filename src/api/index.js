import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://swapi.co/api/',
});

api.interceptors.response.use(response => response.data);

function generateResource(name) {
  return {
    list: () => api.get(`/${name}/`),
    byId: id => api.get(`/${name}/${id}/`),
    schema: () => api.get(`/${name}/schema/`),
  };
}

export default {
  films: generateResource('films'),
  people: generateResource('people'),
  planets: generateResource('planets'),
  species: generateResource('species'),
  starships: generateResource('starships'),
  vehicles: generateResource('vehicles'),
};
