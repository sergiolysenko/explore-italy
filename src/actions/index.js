const selectCity = (city) => {
  return {
    type: 'CITY_SELECTED',
    payload: city,
  };
};

export { selectCity };
