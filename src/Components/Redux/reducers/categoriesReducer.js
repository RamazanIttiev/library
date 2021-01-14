import { createSlice } from '@reduxjs/toolkit';
import API from '../../../utils/fetcher';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { id: '', title: '', isFetching: false },
  reducers: {
    startFetch: state => {
      state.isFetching = true;
    },
    endFetch: state => {
      state.isFetching = false;
    },
    getCategories: (state, { payload }) => {
      return payload;
    },
  },
});

export const { getCategories, startFetch, endFetch } = categoriesSlice.actions;

export const asyncGetCategories = () => async (dispatch, getState) => {
  try {
    dispatch(startFetch());

    const { data, status } = await API('/categories');
    if (status === 200) {
      data.map(item => {
        console.log(item);
        return dispatch(getCategories(item));
      });
    }
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(endFetch());
  }
};

export default categoriesSlice.reducer;
