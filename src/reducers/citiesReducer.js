import  {
  FETCH_CITIES,
  FETCH_CITY
} from '../actions/types';

const citiesReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_CITY:
      return {...state, ...action.payload};
    case FETCH_CITIES:
      return {...state, ...action.payload};
    default:
      return state;
  }
}


export default citiesReducer;
