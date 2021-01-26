import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';
import { v4 as uuidv4 } from 'uuid';

import API from '../../utils/fetcher';

const categoriesAdapter = createEntityAdapter();

export const categoriesSelector = categoriesAdapter.getSelectors(state => state.categories);

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const { data } = await API('/categories');
  const booksSchema = new schema.Entity('booksList');
  const categoriesSchema = new schema.Entity('categories', { booksList: [booksSchema] });
  const result = normalize(
    { categories: data },
    {
      categories: [categoriesSchema],
    },
  );
  return result.entities;
});

export const addCategory = createAsyncThunk('categories/addCategory', async title => {
  const newid = uuidv4();
  const newCategory = { id: newid, title: title, booksList: [] };
  const { data } = await API.post(`/categories`, { ...newCategory });
  return data;
});

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async id => {
  console.log(id);
  await API.delete(`/categories/${id}`);
  return id;
});

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesAdapter.getInitialState({
    isFetching: false,
  }),
  extraReducers: {
    [fetchCategories.pending]: state => {
      state.isFetching = true;
    },
    [fetchCategories.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      categoriesAdapter.upsertMany(state, payload.categories);
    },
    [addCategory.pending]: state => {
      state.isFetching = true;
    },
    [addCategory.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      categoriesAdapter.addOne(state, payload);
    },
    [deleteCategory.pending]: state => {
      state.isFetching = true;
    },
    [deleteCategory.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      categoriesAdapter.removeOne(state, payload);
    },
  },
});

export default categoriesSlice.reducer;
