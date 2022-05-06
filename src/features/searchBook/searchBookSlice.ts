
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export type searchBookType = {
  phrase: string;
  language: string;
}
const initialState: searchBookType  = {
  phrase: " ",
  language: " "
}

const searchBookSlice = createSlice({
  name: 'searchBook',
  initialState,
  reducers: {
    addPhrase: (state, action) => {
      state.phrase = action.payload;
    },
    addLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});

export const { addPhrase, addLanguage } = searchBookSlice.actions;
export const addPhraseBook = (state: RootState) => state.searchBook.phrase;
export const addLanguageBook = (state: RootState) => state.searchBook.language;
export default searchBookSlice.reducer;