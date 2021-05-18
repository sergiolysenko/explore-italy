import React from 'react';
import { connect } from 'react-redux';

import ListCity from './ListCity';

const ListCities = ({cities}) => {
  const renderedCities = cities.map((city) => {
    return <ListCity key={city.name} city={city}/>
  });


  return (
    <main className="cities">
      <h1 className="visually-hidden">Explore Italy!</h1>
      <section className="cities">
        <div className="cities__wrapper">
          {renderedCities}
        </div>
      </section>
    </main>
  )
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cities: Object.values(state.citiesList)
  }
};

export default connect(mapStateToProps)(ListCities);
