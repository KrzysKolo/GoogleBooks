import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import googleBooksApiReducer from '../features/googleBooksAPI/googleBooksApiSlice';
import googleBooksReducer from '../features/googleBooks/googleBooks';
import favoriteBooksReducer from '../features/favoriteBooks/favoriteBooksSlice';

export const store = configureStore({
  reducer: {
    googleBooksApi: googleBooksApiReducer,
    googleBook: googleBooksReducer,
    favoriteBooks: favoriteBooksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
