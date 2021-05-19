import { FETCH_ITEMS } from '../actions/types';

const citiesItemsReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_ITEMS:
      return {...action.payload};
    default:
      return state;
  }
}

export default citiesItemsReducer;
