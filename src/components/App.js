import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import ListCities from './ListCities';
import StartScreen from './StartScreen';
import CityPage from './CityPage';
import Header from './Header';
import Footer from './Footer';
import PlacePage from './PlacePage';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={StartScreen}/>
        <Route path="/:any" component={Header} />
        <Route path="/cities" exact component={ListCities} />
        <Route path="/cities/:name/:navItem" exact component={CityPage} />
        <Route path="/cities/:name/places/:placeTitle" exact component={PlacePage} />
        <Route path="/cities/:any" component={Footer} />
      </Router>
    </div>
  );
}

export default App;
