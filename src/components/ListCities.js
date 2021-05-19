import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCities } from './../actions';
import ListCity from './ListCity';

const ListCities = ({cities, fetchCities}) => {
  const [selectedCity, selectCity] = useState(null);

  useEffect(() => {
    fetchCities();
  }, [fetchCities])

  const renderedCities = cities.map((city) => {
    return (
      <ListCity
        key={city.name}
        city={city}
        selectedCity={selectedCity}
        selectCity={selectCity}
      />)
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
  return {
    cities: Object.values(state.citiesList)
  }
};

export default connect(mapStateToProps, { fetchCities })(ListCities);
