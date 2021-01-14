import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import categoriesReducer from './reducers/categoriesReducer';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
  },
  middleware: [...getDefaultMiddleware()],
});
