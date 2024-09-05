import React from 'react';
import CountrySearch from './components/CountrySearch';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import './App.css';

const App = () => (
  <div className="app">
    <h1>Country Search</h1>
    <CountrySearch />
    <CountryList />
    <CountryDetail />
  </div>
);

export default App;
