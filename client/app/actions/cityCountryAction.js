import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const getCountry = createAction(actionTypes.GET_COUNTRY);
export const getCityByCountry = createAction(actionTypes.GET_CITY_BY_COUNTRY);
