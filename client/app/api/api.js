import request from '../utils/request';

export const getCityWeather = (payload) => {
  return request.post('api/home/GetCitiesByCountry', payload);
};

export const getCitiesByCountry = (payload) => {
  debugger;
  return request.post('api/home/GetCitiesByCountry', payload);
};
