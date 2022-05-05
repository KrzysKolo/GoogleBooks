import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import googleBooksReducer from '../features/googleBooksAPI/googleBooksSlice';
import favoriteBooksReducer from '../features/favoriteBooks/favoriteBooksSlice';
import searchBookReducer  from '../features/searchBook/searchBookSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    googleBooks: googleBooksReducer,
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
