import React from 'react';
import {Link} from 'react-router-dom';

const ListCity = ({city}) => {
  const {name, src, italName, description} = city;

  const onCityClick = (evt) => {
    evt.preventDefault();

  }

  return (
    <div className="cities__card-wrapper">
      <Link className="cities__explore-link" to={"/place"}>
        <span className="cities__explore-span">Explore</span>
      </Link>
      <div className="cities__main-link">
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

export default ListCity;
