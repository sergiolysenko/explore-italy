import { combineReducers } from 'redux';

const citiesListMock = {
  Florence: {
    description: 'The birthplace of the Renaissance',
    italName: 'Firenze',
    name: 'Florence',
    src: './img/florence/florence-big.jpg'
  },
  Rome: {
    description: 'Rome is a oldes city in Italy',
    name: 'Rome',
    italName: 'Roma',
    src: './img/rome/rome-1.jpg'
  },
  Neapole: {
    description: 'Neapole',
    name: 'Neapole',
    italName: 'Neapole',
    src: './img/rome/rome-1.jpg'
  },
  Milan: {
    description: 'The city of fashion',
    name: 'Milan',
    italName: 'Milano',
    src: '../img/milan/milan.jpg'
  },
  Venice: {
    description: 'The Floating City',
    name: 'Venice',
    italName: 'Venezia',
    src: './img/venice/venice-2.jpg'
  },
  Pisa: {
    description: 'Not just a tower',
    name: 'Pisa',
    italName: 'Pisae',
    src: './img/pisa/pisa.jpg'
  }
}

const places = {
  Milan: {
    ajsf123iuh1j: {
      title: "Il Duomo (Milan Cathedral)",
      description: "The massive Cathedral of Santa Maria Nascente, which the Milanese call just 'Il Duomo' is among the world's largest (it holds up to 40,000 people) and most magnificent churches, the ultimate example of the Flamboyant Gothic style. It was begun in the 14th century, but its façade was not completed until the early 1800s, under Napoleon.",
      pictures: ['../img/milan/places/milan-cathedral/milan-cathedral-main.jpg', '../img/milan/places/milan-cathedral/milan-cathedral-main.jpg', '../img/milan/places/milan-cathedral/milan-cathedral-main.jpg']
    },
    hjsd1273812has: {
      title: "Galleria Vittorio Emanuele II: Luxury Shops and Elegant Cafés",
      description: "The massive Cathedral of Santa Maria Nascente, which the Milanese call just 'Il Duomo' is among the world's largest (it holds up to 40,000 people) and most magnificent churches, the ultimate example of the Flamboyant Gothic style. It was begun in the 14th century, but its façade was not completed until the early 1800s, under Napoleon.",
      pictures: ['../img/milan/places/milan-cathedral/milan-cathedral-main.jpg', '../img/milan/places/milan-cathedral/milan-cathedral-main.jpg', '../img/milan/places/milan-cathedral/milan-cathedral-main.jpg']
    },
    kkjdshf912jjhd: {
      title: "San Maurizio and the Archaeology Museum",
      description: "The massive Cathedral of Santa Maria Nascente, which the Milanese call just 'Il Duomo' is among the world's largest (it holds up to 40,000 people) and most magnificent churches, the ultimate example of the Flamboyant Gothic style. It was begun in the 14th century, but its façade was not completed until the early 1800s, under Napoleon.",
      pictures: ['../img/milan/places/milan-cathedral/milan-cathedral-main.jpg', '../img/milan/places/milan-cathedral/milan-cathedral-main.jpg', '../img/milan/places/milan-cathedral/milan-cathedral-main.jpg']
    }
  }
}

const citiesReducer = (citiesList = citiesListMock) => {
  return citiesList;
}

const placesReducer = (placesList = places) => {
  return placesList;
}

const selectedCityReducer = (selectedCity = null, action) => {
  if (selectedCity === action.payload) {
    return null;
  }

  if (action.type === 'CITY_SELECTED') {
    return action.payload;
  }

  return selectedCity;
}

export default combineReducers({
  citiesList: citiesReducer,
  selectedCity: selectedCityReducer,
  places: placesReducer,
});
