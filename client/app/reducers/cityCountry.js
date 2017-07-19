
import { handleActions } from 'redux-actions';

const defaultState = {
  defaultCountry: 'Australia',
  defaultCity: 'Sydney'
};

const cityCountryReducer = handleActions({
  GET_COUNTRY: (state) => ({
    ...state
  }),

  GET_CITY_BY_COUNTRY: (state) => ({
    ...state
  })
}, defaultState);

export default cityCountryReducer;
