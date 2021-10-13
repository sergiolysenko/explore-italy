import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCityItem } from 'actions';

interface PlacePageProps {
  place: {facts: [], pictures: [], title: String, description: String},
  match: {
    params: {name: String, placeId: String},
  },
  fetchCityItem?: (city: any, id: any) => {}
}

const PlacePage: React.FC<PlacePageProps> = ({ place, match, fetchCityItem }) => {
  useEffect(() => {
    fetchCityItem(match.params.name, match.params.placeId);
    window.scrollTo(0, 0);
  }, [fetchCityItem, match.params.name, match.params.placeId])

  if (!place) {
    return (<div>Loading...</div> )
  }

  const renderedFactsList = () => {
    return place.facts.map((fact, index) => {
      return (<li key={index} className="info__fact">{fact}</li>)
    });
  }

  const renderedPicturesList = () => {
    return place.pictures.map((picture) => {
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

const mapStateToProps = (state, ownProps) => {
  return {
    place: state.cityItems[ownProps.match.params.placeId]
  }
}

export default connect(mapStateToProps, { fetchCityItem })(PlacePage);
