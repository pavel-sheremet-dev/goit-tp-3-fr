import { createSlice } from '@reduxjs/toolkit';

import {
  addBook,
  getBooks,
  getUnreadBooks,
  updateBookReview,
} from './books-operations';

const initialState = {
  library: {
    unread: [],
    reading: [],
    finished: [],
  },
  loading: false,
  isFirstLoaded: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addBook.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addBook.fulfilled, (state, { payload }) => {
        state.library.unread = [...state.library.unread, payload];
        state.loading = false;
      })
      .addCase(addBook.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })
      .addCase(getBooks.pending, state => {
        state.error = null;
        state.isFirstLoaded = false;
        state.loading = true;
      })
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.library.unread = payload.library.unread;
        state.library.reading = payload.library.reading;
        state.library.finished = payload.library.finished;
        state.isFirstLoaded = true;
        state.loading = false;
      })
      .addCase(getBooks.rejected, (state, { payload }) => {
        state.error = payload;
        state.isFirstLoaded = true;
        state.loading = false;
      })
      .addCase(getUnreadBooks.pending, state => {
        state.error = null;
        state.isFirstLoaded = false;
        state.isFirstLoaded = true;
        state.loading = true;
      })
      .addCase(getUnreadBooks.fulfilled, (state, { payload }) => {
        state.library.unread = payload.library.unread;
        state.library.reading = initialState.library.reading;
        state.library.finished = initialState.library.finished;
        state.loading = false;
      })
      .addCase(getUnreadBooks.rejected, (state, { payload }) => {
        state.error = payload;
        state.isFirstLoaded = true;
        state.loading = false;
      })
      .addCase(updateBookReview.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(updateBookReview.fulfilled, (state, { payload }) => {
        state.library[payload.status] = state.library[payload.status].map(
          book =>
            book.id === payload.id
              ? { ...book, rating: payload.rating, review: payload.review }
              : book,
        );
        state.loading = false;
      })
      .addCase(updateBookReview.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export default booksSlice.reducer;
