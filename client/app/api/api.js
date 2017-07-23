import request from '../utils/request';

export const getCityWeather = (payload) => {
  return request.get(`api/getWeatherByCity/${payload.country}/${payload.city}`);
};

export const getCitiesByCountry = (payload) => {
  return request.get(`api/getCitiesByCountry/${payload.country}`);
};
