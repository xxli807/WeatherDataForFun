import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const getCityWeather = createAction(actionTypes.GET_WEATHER_BY_CITY);
export const getCityWeatherSuccess = createAction(actionTypes.GET_WEATHER_BY_CITY_SUCCESS);
export const getCityByCountry = createAction(actionTypes.GET_CITY_BY_COUNTRY);
export const getCityByCountrySuccess = createAction(actionTypes.GET_CITY_BY_COUNTRY_SUCCESS);
