import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../slices/countrySlice';

const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query) {
      dispatch(fetchCountries(query));
    }
  };

  return (
    <div className="country-search">
      <input
        type="text"
        placeholder="Enter country name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CountrySearch;
