import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../slices/countrySlice';

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export default store;
