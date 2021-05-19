import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import citiesItemsReducer from './citiesItemsReducer';

export default combineReducers({
  citiesList: citiesReducer,
  cityItems: citiesItemsReducer,
});
