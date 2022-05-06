/* pobieranie danych z API */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import GoogleBook from '../../api/google';
import { RootState, AppThunk } from '../../app/store';

export type googleBooksApiType = {
  googleBooksApi: GoogleBook[];
};

const initialState: googleBooksApiType = {
  googleBooksApi: [],
};

const googleBooksApiSlice = createSlice({
  name: 'googleBooksApi',
  initialState,
  reducers: {
    getGoogleBooksAPI: (state, action) => {
      state.googleBooksApi = action.payload;
    },
  }
})

export const { getGoogleBooksAPI } = googleBooksApiSlice.actions;
export const getAllGoogleBooksApi = (state: RootState) => state.googleBooksApi.googleBooksApi;
export default googleBooksApiSlice.reducer;


