import request from 'utils/request';

export const getCountry = (payload) => {
  return request.post('home/GetCitiesByCountry', payload);
};

export const getCitiesByCountry = (payload) => {
  return request.post('home/GetCitiesByCountry', payload);
};
