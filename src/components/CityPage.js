import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CityPage = ({city, places}) => {
  const renderPlacesNavList = () => {
    return places.map((place) => {
      return (<li key={place.title} className="city-page__sub-nav-item">
        <Link to="/" className="city-page__sub-nav-link">{place.title}</Link>
      </li>)
    });
  };

  const renderPlaceList = () => {
    return places.map((place) => {
      const {title, description, pictures} = place;

      return (
        <li key={place.title} className="city-page__item city-page-item">
          <div className="city-page-item__text-wrapper">
            <h2 className="city-page-item__title">
              {title}
            </h2>
            <p className="city-page-item__description">
              {description}
            </p>
            <Link to="/" className="city-page-item__btn-more">
              More information and photos
              <span className="city-page-item__btn-arrow-wrapper">
                <svg className="city-page-item__btn-arrow" width="24" height="12" viewBox="0 0 24 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 7H1V6H21.5L16.5 1H17L22 6L22.5 6.5L22 7L17 12H16L21.5 7Z" fill="black" />
                  <path d="M21.5 7H1V6H21.5M21.5 7V6M21.5 7L16 12H17L22 7L22.5 6.5L22 6L17 1H16.5L21.5 6"
                    stroke="black" />
                </svg>
              </span>
            </Link>
          </div>
          <div className="city-page-item__picture-wrapper">
            <picture>
              <img className="city-page-item__picture" src={pictures[0]}
                alt="Il Duomo (Milan Cathedral)" width="605" height="971" />
            </picture>
          </div>
        </li>
      )
    })
  }

  return (
    <main className="city-page">
    <div className="city-page__title-wrapper">
      <h1 className="city-page__title">
        {city.name}
      </h1>
      <p className="city-page__slogan">{city.description}</p>
    </div>
    <section className="city-page__nav-img">
      <div className="city-page__main-img-wrapper">
        <picture>
          <img className="city-page__main-img" src={city.src} alt={city.name} />
        </picture>
      </div>
      <div className="city-page__nav-wrapper">
        <ul className="city-page__nav-list">
          <li className="city-page__nav-item">
            <a href="city-page-people.html" className="city-page__nav-link">people</a>
          </li>
          <li className="city-page__nav-item">
            <a href="city-page-history.html" className="city-page__nav-link">history</a>
          </li>
          <li className="city-page__nav-item">
            <Link to="/" className="city-page__nav-link">places</Link>
          </li>
        </ul>
        <div className="city-page__sub-nav">
          <h2 className="city-page__sub-nav-title">{places.length} best places in Milan</h2>
          <ul className="city-page__sub-nav-list">
            {renderPlacesNavList()}
          </ul>
        </div>
      </div>
    </section>
    <section className="city-page__items">
      <ul className="city-page__items-list">
        <div className="city-page__items-line">
        </div>
        {renderPlaceList()}
      </ul>
    </section>
  </main>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.citiesList[ownProps.match.params.name],
    places: Object.values(state.places[ownProps.match.params.name])
  }
}

export default connect(mapStateToProps)(CityPage);
