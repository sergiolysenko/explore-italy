import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListCities from './ListCities';
import StartScreen from './StartScreen';


const listCities = {
  vsgahw222asd: {
    description: 'The birthplace of the Renaissance',
    italName: 'Firenze',
    name: 'Florence',
    src: './img/florence/florence-big.jpg'
  },
  vsasdq23222asd: {
    description: 'Rome is a oldes city in Italy',
    name: 'Rome',
    italName: 'Roma',
    src: './img/rome/rome-1.jpg'
  },
  v22sadhw222asd: {
    description: 'Fashion and football',
    name: 'Milan',
    italName: 'Milano',
    src: './img/milan/milan.jpg'
  },
  vsgas213sdxc: {
    description: 'The Floating City',
    name: 'Venice',
    italName: 'Venezia',
    src: './img/venice/venice-2.jpg'
  },
  vss22gas213sdxc: {
    description: 'Not just a tower',
    name: 'Pisa',
    italName: 'Pisae',
    src: './img/pisa/pisa.jpg'
  }
}
const adaptedList = Object.values(listCities);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact>
          <StartScreen />
        </Route>
        <Route path="/cities" exact>
          <ListCities cities={adaptedList}/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
