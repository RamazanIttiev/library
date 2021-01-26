import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import booksReducer from './reducers/booksReducer';
import categoriesReducer from './reducers/categoriesReducer';
import adminLogin from './reducers/adminLogin';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
    adminLogin,
  },
  middleware: [...getDefaultMiddleware()],
});
