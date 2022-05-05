
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export type searchBookType = {
  phrase: string;
}
const initialState: searchBookType  = {
  phrase: " ",
}

const searchBookSlice = createSlice({
  name: 'searchBook',
  initialState,
  reducers: {
    addPhrase: (state, action) => {
      state.phrase = action.payload;
    }
  }
})

export const { addPhrase } = searchBookSlice.actions;
export const addPhraseBook = (state: RootState) => state.searchBook.phrase;
export default searchBookSlice.reducer;