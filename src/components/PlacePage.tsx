import React, { useEffect, useState } from 'react';
import { citiesCollection } from 'firebase.js';

import Loader from 'components/Loader';

interface T {
  match: {
    params: {
      name: string; 
      placeId: string;
    }
  }
}

interface Place {
  facts: [];
  pictures: [];
  title: string;
  description: string;
}

const PlacePage: React.FC<T> = ({ match }) => {
const [place, setPalce] = useState<Place>({} as Place);

  useEffect(() => {
    const fetchCityItem = async (city: string, itemId: string) => {
      const itemSnapshot = await citiesCollection.doc(city)
        .collection('places')
        .doc(itemId)
        .get();

      const item = itemSnapshot.data() as Place;
      setPalce(item);
    }
    
    fetchCityItem(match.params.name, match.params.placeId);
    window.scrollTo(0, 0);
  }, [match.params.name, match.params.placeId])

  if (Object.values(place).length === 0) {
    return <Loader/> 
  }

  const renderedFactsList = () => {
    return place.facts.map((fact: string, index: number) => {
      return (<li key={index} className="info__fact">{fact}</li>)
    });
  }

  const renderedPicturesList = () => {
    return place.pictures.map((picture: string) => {
      return (
        <li className="place__picture-wrapper">
          <a href="#s" className="place__picture-link">
            <picture>
              <img className="place__picture" src={picture} alt="colosseum" width="605" height="607" object-position="500" />
            </picture>
            <h3 className="place__picture-name">Colosseum  in the dawn</h3>
          </a>
        </li>
      )
    })
  }

  return (
    <main className="place">
      <div className="place__title-wrapper">
        <h1 className="place__title">
          {place.title}
        </h1>
      </div>
      <section className="place__info info">
        <div className="info__wrapper">
          <ul className="info__facts">
            {renderedFactsList()}
          </ul>
          <p className="info__wiki">
            {place.description}
          </p>
        </div>
      </section>
      <section className="place__pictures">
        <h2 className="place__pictures-title">Selected photos</h2>
        <div className="place__pictures-line">
        </div>
        <ul className="place__pictures-list">
          {renderedPicturesList()}
        </ul>
      </section>
    </main>
  );
}

export default PlacePage;
