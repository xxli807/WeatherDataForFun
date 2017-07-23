
import { handleActions } from 'redux-actions';

const defaultState = {
  defaultCountry: '',
  cities: [],
  weather: {}
};

const cityCountryReducer = handleActions({
  GET_CITY_BY_COUNTRY_SUCCESS: (state, action) => ({
    ...state, cities: action.payload.cities
  }),
//  GET_CITY_BY_COUNTRY: (state, action) => {
//    debugger;
//    return object.Assign({}, ...state, {cities: action.payload.cities} );
//   },
  GET_WEATHER_BY_CITY_SUCCESS: (state, action) => ({
    ...state, weather: action.payload.cityWeather
  })
}, defaultState);

export default cityCountryReducer;
