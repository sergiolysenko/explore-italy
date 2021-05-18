import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCity } from '../actions';

const ListCity = ({city, selectCity, selectedCity}) => {
  const {name, src, italName, description} = city;
  const isSelectedCity = selectedCity === city.name;

  const onCityClick = (evt) => {
    evt.preventDefault();
    selectCity(name);
  }

  return (
    <div
      onClick={onCityClick}
      className={`cities__card-wrapper ${isSelectedCity ? 'cities__card-wrapper--active' : ''}`}
    >
      <Link className="cities__explore-link" to={`/cities/${city.name}`}>
        <span className="cities__explore-span">Explore</span>
      </Link>
      <div className={`cities__main-link ${isSelectedCity ? 'cities__main-link--active' : ''}`}>
        <div className="cities__picture-wrapper">
          <img className="cities__picture" src={src} alt={name} width=" 1440" height="1024"></img>
        </div>
        <div className="cities__text">
          <h2 className="cities__name">{name}</h2>
          <h3 className="cities__name">{italName}</h3>
          <p className="cities__description">{description}</p>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    selectedCity: state.selectedCity
  }
}

export default connect(mapStateToProps, { selectCity })(ListCity);
