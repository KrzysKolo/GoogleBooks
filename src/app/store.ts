import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import googleBooksApiReducer from '../features/googleBooksAPI/googleBooksApiSlice';
import googleBooksReducer from '../features/googleBooks/googleBooks';
import favoriteBooksReducer from '../features/favoriteBooks/favoriteBooksSlice';
import searchBookReducer  from '../features/searchBook/searchBookSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    googleBooksApi: googleBooksApiReducer,
    googleBook: googleBooksReducer,
    favoriteBooks: favoriteBooksReducer,
    searchBook: searchBookReducer,
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
