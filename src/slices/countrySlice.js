import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "country/fetchCountries",
  async (searchQuery, { rejectWithValue }) => {
    try {
        if(searchQuery){
            const response = await axios.get(
                `http://localhost:5001/api/countries?name=${searchQuery}`
              );
              return response.data.data;
        }else{
            throw Error('Country name is not available')
        }
     
    } catch (error) {
      return rejectWithValue(
        error.response
          ? error.response.data.message
          : "Failed to fetch countries"
      );
    }
  }
);

export const fetchCountryDetails = createAsyncThunk(
  "country/fetchCountryDetails",
  async (countryCode, { rejectWithValue }) => {
    try {
        if(countryCode){
            const response = await axios.get(`http://localhost:5001/api/countries/${countryCode}`);
            return response.data.data[0];
        }else{
            throw Error('Country code is not available')
        }
   
    } catch (error) {
      return rejectWithValue(
        error.response
          ? error.response.data.message
          : "Failed to fetch country details"
      );
    }
  }
);
const countrySlice = createSlice({
  name: 'country',
  initialState: {
    countries: [],
    countryDetails: null,
    loading: false,
    error: null
  },
  reducers: {
    resetCountryDetails: (state) => {
      state.countryDetails = null;
    },
    clearCountries: (state) => {
      state.countries = [];
      state.countryDetails = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true; // Start loading
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false; // Stop loading
        state.countries = action.payload;
        state.error = null;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false; // Stop loading
        state.countries = [];
        state.error = action.payload || 'Failed to fetch countries';
      })
      .addCase(fetchCountryDetails.pending, (state) => {
        state.loading = true; // Start loading
        state.error = null;
      })
      .addCase(fetchCountryDetails.fulfilled, (state, action) => {
        state.loading = false; // Stop loading
        state.countryDetails = action.payload;
        state.error = null;
      })
      .addCase(fetchCountryDetails.rejected, (state, action) => {
        state.loading = false; // Stop loading
        state.countryDetails = null;
        state.error = action.payload || 'Failed to fetch country details';
      });
  }
});

export const { resetCountryDetails, clearCountries } = countrySlice.actions;

export const selectCountries = (state) => state.country.countries;
export const selectCountryDetails = (state) => state.country.countryDetails;

export default countrySlice.reducer;