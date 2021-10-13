import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import ListCities from './ListCities';
import StartScreen from './StartScreen';
import CityPage from './CityPage';
import Layout from './Layout';

import PlacePage from './PlacePage';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={StartScreen}/>
          <Layout>
            <Route path="/cities" exact component={ListCities} />
            <Route path="/cities/:name/:navItem" exact component={CityPage} />
            <Route path="/cities/:name/places/:placeId" exact component={PlacePage} />
          </ Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
