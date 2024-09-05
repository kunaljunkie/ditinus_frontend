import React from 'react';

const CountryCard = ({ country, onClick }) => {
  return (
    <div className="country-card" onClick={onClick}>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
      <h3>{country.name.common}</h3>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
};

export default CountryCard;
