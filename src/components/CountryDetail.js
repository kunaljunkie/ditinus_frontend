import React from 'react';
import { useSelector } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import ErrorNotification from './ErrorNotification';


const CountryDetail = () => {
  const { countryDetails, loading, error } = useSelector((state) => state.country);

  if (error) {
    return <ErrorNotification message={error} />;
  }

  if (!countryDetails) {
    return <div>No country details available.</div>;
  }

  return (
    <div className="country-detail">
      <h2>{countryDetails.name.common}</h2>
      <p><strong>Capital:</strong> {countryDetails.capital[0]}</p>
      <p><strong>Region:</strong> {countryDetails.region}</p>
      <p><strong>Subregion:</strong> {countryDetails.subregion}</p>
      <p><strong>Languages:</strong> {Object.values(countryDetails.languages).join(', ')}</p>
      <p><strong>Population:</strong> {countryDetails.population.toLocaleString()}</p>
      <img src={countryDetails.flags.svg} alt={`Flag of ${countryDetails.name.common}`} />
    </div>
  );
};

export default CountryDetail;
