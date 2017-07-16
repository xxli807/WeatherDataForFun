import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cityCountryReducer from '.././reducers/cityCountry';

export default combineReducers({
  routing: routerReducer,
  cityCountry: cityCountryReducer
});
