import { FETCH_ITEMS, FETCH_ITEM } from '../actions/types';

const citiesItemsReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_ITEM:
      return {...state, ...action.payload};
    case FETCH_ITEMS:
      return {...action.payload};
    default:
      return state;
  }
}

export default citiesItemsReducer;
