/* dane wykorzystywane w aplikacji */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import GoogleBook from '../../api/google';
import { RootState, AppThunk } from '../../app/store';
import { BookInterface } from '../../models/BookInterface';

export type googleBooksType = {
  googleBooks: BookInterface[];
};

const initialState: googleBooksType = {
  googleBooks: [],
};

const googleBooksSlice = createSlice({
  name: 'googleBooks',
  initialState,
  reducers: {
    getGoogleBooks: (state, action) => {
      state.googleBooks = action.payload;
    },
    updateGoogleBook: (state, actions) => {
      state.googleBooks = actions.payload;
    },
  },
})

export const { getGoogleBooks, updateGoogleBook } = googleBooksSlice.actions;
export const getAllGoogleBooks = (state: RootState) => state.googleBook.googleBooks;
export const getUpdateGoogleBooks = (state: RootState) => state.googleBook.googleBooks;
export default googleBooksSlice.reducer;


