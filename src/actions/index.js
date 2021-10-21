/* import firebase from './../firebase';
import  {
  FETCH_CITIES,
  FETCH_CITY,
  FETCH_ITEMS
} from './types';

const citiesCollection = firebase.firestore().collection('list-city');

export const fetchCity = (city) => async dispatch => {
  const citySnapshot = await citiesCollection.doc(city).get();

  dispatch({type: FETCH_CITY, payload: {[city]: citySnapshot.data()}});
}

export const fetchCities = () => async dispatch => {
  const listCitiesSnapshot = await citiesCollection.get();
  let cities = {};

  listCitiesSnapshot.forEach((doc) => cities[doc.id] = doc.data());

  dispatch({type: FETCH_CITIES, payload: cities});
}

export const fetchCityItems = (city, itemsName) => async dispatch => {
  const itemsSnapshot = await citiesCollection.doc(city).collection(itemsName).get();
  let items = {};

  itemsSnapshot.forEach((doc) => items[doc.id] = {...doc.data(), ...{id: doc.id}});

  dispatch({type: FETCH_ITEMS, payload: items});
}

 */