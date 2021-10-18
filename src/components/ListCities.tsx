import React, { useEffect, useState } from 'react';
import CityCard from 'components/CityCard';
import { citiesCollection } from './../firebase';

interface City {
  description: string,
  italName: string,
  name: string,
  src: string
}

const ListCities = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, selectCity] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      const listCitiesSnapshot = await citiesCollection.get();
      const cities: City[] = [];

      listCitiesSnapshot.forEach((doc) => {
        const data = doc.data() as City;
        if (data) {
          cities.push(data)
        }
      });

      setCities(cities);
    };

    fetchCities();
  }, [])

  const renderedCities = cities.map((city) => {
    return (
      <CityCard
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

export default ListCities;
