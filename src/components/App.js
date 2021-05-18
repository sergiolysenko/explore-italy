import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import ListCities from './ListCities';
import StartScreen from './StartScreen';
import CityPage from './CityPage';


const App = () => {
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact>
          <StartScreen />
        </Route>
        <Route path="/cities" exact component={ListCities}>
        </Route>
        <Route path="/cities/:name" exact component={CityPage} />
      </Router>
    </div>
  );
}

export default App;
