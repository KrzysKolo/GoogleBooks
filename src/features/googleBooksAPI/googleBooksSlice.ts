
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import GoogleBook from '../../api/google';
import { RootState, AppThunk } from '../../app/store';

export type googleBooksApiType = {
  googleBooksApi: GoogleBook[];
};

const initialState: googleBooksApiType = {
  googleBooksApi: [],
};

const googleBooksSlice = createSlice({
  name: 'googleBooks',
  initialState,
  reducers: {
    getGoogleBooksAPI: (state, action) => {
      state.googleBooksApi = action.payload;
    },
  }
})

export const { getGoogleBooksAPI } = googleBooksSlice.actions;
export const getAllGoogleBooks = (state: RootState) => state.googleBooks.googleBooksApi;
export default googleBooksSlice.reducer;


