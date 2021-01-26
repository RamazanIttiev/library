import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import API from '../../utils/fetcher';
import { fetchCategories } from './categoriesReducer';
import { v4 as uuidv4 } from 'uuid';
import { getCurrentBooks } from '../selectors/booksSelector';

const booksAdapter = createEntityAdapter();

export const booksSelector = booksAdapter.getSelectors(state => state.books);

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const { data } = await API('/books');
  return data;
});

export const addBook = createAsyncThunk(
  'books/addBook',
  async ({ title, author, image, description, category }) => {
    const newBook = {
      id: uuidv4(),
      title,
      image,
      author,
      category,
      description,
    };
    const { data } = await API.post(`/books`, { ...newBook });
    return data;
  },
);

// export const addBook = createAsyncThunk(
//   'category/patchCategory',
//   async ({ title, author, image, description, category }, { getState }) => {
//     const books = getCurrentBooks(getState(), categoryId);
//     await API.patch(`/books/${categoryId}`, {
//       categoryList: [...books, { title, author, image, description, category }],
//     });
//     return booksData;
//   },
// );

export const deleteBook = createAsyncThunk('books/deleteBook', async id => {
  await API.delete(`/categories/${id}`);
  return id;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState({ allBooks: [] }),

  extraReducers: {
    [fetchCategories.fulfilled]: (state, { payload }) => {
      booksAdapter.upsertMany(state, payload.booksList);
    },
    [fetchBooks.fulfilled]: (state, { payload }) => {
      payload.map(item => {
        return state.allBooks.push(item);
      });
    },
    [addBook.fulfilled]: (state, { payload }) => {
      console.log(payload);
      // payload.map(item => {
      //   return state.allBooks.push(item);
      // });
    },
    [deleteBook.fulfilled]: (state, { payload }) => {
      booksAdapter.removeOne(state, payload.booksList);
    },
  },
});

export default booksSlice.reducer;
