import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryDetails, selectCountries } from '../slices/countrySlice';
import CountryCard from './CountryCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorNotification from './ErrorNotification';

const CountryList = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const loading = useSelector((state) => state.country.loading);
  const error = useSelector((state) => state.country.error);

  const handleClick = (countryCode) => {
    dispatch(fetchCountryDetails(countryCode));
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorNotification message={error} />;
  }
  if (!countries || countries.length === 0) {
    return <div>No countries available.</div>;
  }


  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          onClick={() => handleClick(country.codes.cca2)}
        />
      ))}
    </div>
  );
};

export default CountryList;
