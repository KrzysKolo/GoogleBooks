
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import GoogleBook from '../../api/google';
import { RootState, AppThunk } from '../../app/store';
import { BookInterface } from '../../models/BookInterface';


export type googleBooksApiType = {
  googleBooksApi: GoogleBook[];
  filter: string,
}
const initialState: googleBooksApiType  = {
  googleBooksApi: [],
  filter: "",
}

const googleBooksSlice = createSlice({
  name: 'googleBooks',
  initialState,
  reducers: {
    getGoogleBooksAPI: (state, action) => {
      state.googleBooksApi = action.payload;
    },
    getFiler: (state, action) => {
      state.filter = action.payload;
    }
  }
})

export const { getGoogleBooksAPI, getFiler } = googleBooksSlice.actions;
export const getAllGoogleBooks = (state: RootState) => state.googleBooks.googleBooksApi;
export const getFilterAny = (state: RootState) => state.googleBooks.filter;
export default googleBooksSlice.reducer;