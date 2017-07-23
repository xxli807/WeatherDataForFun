import { takeLatest } from 'redux-saga/effects';
import simpleSaga from '../utils/simpleSaga';
import * as api from './api';
import * as cw from '../actions/cityCountryAction';
import * as actionTypes from '../actions/actionTypes';

export const getCitiesByCountry = simpleSaga.bind(null, cw.getCityByCountrySuccess, null, api.getCitiesByCountry);
export const getWeatherByCity = simpleSaga.bind(null, cw.getCityWeatherSuccess, null, api.getCityWeather);

export default [
  takeLatest(actionTypes.GET_CITY_BY_COUNTRY, getCitiesByCountry),
  takeLatest(actionTypes.GET_WEATHER_BY_CITY, getWeatherByCity)
];
