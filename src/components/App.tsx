import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import ListCities from 'components/ListCities';
import StartScreen from 'components/StartScreen';
import CityPage from 'components/CityPage';
import Layout from 'components/Layout';
import PlacePage from './PlacePage';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={StartScreen}/>
          <Route path="/cities" exact component={ListCities} />
          <Layout>
            <Route path="/cities/:name/:navItem" exact component={CityPage} />
            <Route path="/cities/:name/places/:placeId" exact component={PlacePage} />
          </ Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
