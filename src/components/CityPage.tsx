import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCity, fetchCityItems } from '../actions';

const CityPage = ({match, city, items, fetchCity, fetchCityItems}) => {
  useEffect(() => {
    fetchCity(match.params.name);
    fetchCityItems(match.params.name, match.params.navItem);
  }, [fetchCity, fetchCityItems, match.params.name, match.params.navItem]);

  if (!city) {
    return <div>Loading...</div>
  }

  const renderItemsNavList = () => {
    if (!items) {
      return <div>Loading...</div>
    }

    return items.map(({title, id}) => {
      return (<li key={id} className="city-page__sub-nav-item">
        <a href={`#${title}`} className="city-page__sub-nav-link">{title}</a>
      </li>)
    });
  };

  const renderItemList = () => {
    if (!items) {
      return <div>Loading...</div>
    }

    return items.map((items) => {
      const {title, description, pictures, id} = items;
      return (
        <li key={id} id={title} className="city-page__item city-page-item">
          <div className="city-page-item__text-wrapper">
            <h2 className="city-page-item__title">
              {title}
            </h2>
            <p className="city-page-item__description">
              {description}
            </p>
            {match.params.navItem === 'places' ? (
              <Link to={`./places/${id}`} className="city-page-item__btn-more">
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
            ) : ''}
          </div>
          <div className="city-page-item__picture-wrapper">
            {pictures.length === 0 ? '' : (
              <picture>
                <img className="city-page-item__picture" src={pictures[0]}
                  alt={title} width="605" height="971" />
              </picture>
              )
            }
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
            <Link
              to={`/cities/${city.name}/places`}
              onClick={() => fetchCityItems(match.params.name, 'places')}
              className="city-page__nav-link">places</Link>
          </li>
          <li className="city-page__nav-item">
            <Link
              to={`/cities/${city.name}/people`}
              onClick={() => fetchCityItems(match.params.name, 'people')}
              className="city-page__nav-link">people</Link>
          </li>
          <li className="city-page__nav-item">
            <Link to={`/cities/${city.name}/history`} className="city-page__nav-link">history</Link>
          </li>
        </ul>
        <div className="city-page__sub-nav">
          {match.params.navItem === 'history' ? '' : (
            <h2 className="city-page__sub-nav-title">{items ? items.length : 0} {match.params.navItem} in Milan</h2>
          )}
          <ul className="city-page__sub-nav-list">
            {renderItemsNavList()}
          </ul>
        </div>
      </div>
    </section>
    <section className="city-page__items">
      <ul className="city-page__items-list">
        <div className="city-page__items-line">
        </div>
        {renderItemList()}
      </ul>
    </section>
  </main>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    city: state.citiesList[ownProps.match.params.name],
    items: Object.values(state.cityItems),
  }
}

export default connect(mapStateToProps, { fetchCity, fetchCityItems })(CityPage);
