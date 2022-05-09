
import { createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';

export type favoriteBooksType = {
  isFavorite: boolean;
};

const initialState: favoriteBooksType = {
  isFavorite: false,
};

const favoriteBooksSlice = createSlice({
  name: 'favoriteBooks',
  initialState,
  reducers: {
    isFavoriteChange: (state, action) => {
      state.isFavorite = action.payload;
    }
  }
})

export const { isFavoriteChange } = favoriteBooksSlice.actions;
export const changeFavoriteBook = (state: RootState) => state.favoriteBooks.isFavorite;
export default favoriteBooksSlice.reducer;