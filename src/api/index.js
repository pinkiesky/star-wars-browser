import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://swapi.co/api/',
});

instance.interceptors.response.use(response => response.data);

function generateResource(name) {
  return {
    list: (prevResults = null) => {
      if (prevResults && prevResults.next) {
        return instance.get(prevResults.next);
      }

      if (prevResults && !prevResults.next) {
        throw new Error('End reached');
      }

      return instance.get(`/${name}/`);
    },
    byId: id => instance.get(`/${name}/${id}/`),
    schema: () => instance.get(`/${name}/schema/`),
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
