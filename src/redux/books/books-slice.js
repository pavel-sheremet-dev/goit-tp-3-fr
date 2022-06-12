import { createSlice } from '@reduxjs/toolkit';
import { getBooks, getUnreadBooks } from './books-operations';

const initialState = {
  library: {
    unread: [
      {
        id: null,
        name: null,
        author: null,
        year: null,
        status: null,
        pages: null,
        rating: null,
        review: null,
      },
    ],
    reading: [
      {
        id: null,
        name: null,
        author: null,
        year: null,
        status: null,
        pages: null,
        rating: null,
        review: null,
      },
    ],
    finished: [
      {
        id: null,
        name: null,
        author: null,
        year: null,
        status: null,
        pages: null,
        rating: null,
        review: null,
      },
    ],
  },
  loading: false,
  error: false,
};

const itemsSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBooks.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getBooks.fulfilled, (state, { payload }) => {
        state.library.unread = payload.library.unread;
        state.library.reading = payload.library.reading;
        state.library.finished = payload.library.finished;
        state.loading = false;
      })
      .addCase(getBooks.rejected, (state, { payload }) => {
        state.data.error = payload;
        state.data.loading = false;
      })
      .addCase(getUnreadBooks.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getUnreadBooks.fulfilled, (state, { payload }) => {
        state.data.items = [payload, ...state.data.items];
        state.data.loading = false;
      })
      .addCase(getUnreadBooks.rejected, (state, { payload }) => {
        state.data.error = payload;
        state.data.loading = false;
      });
  },
});

export const { changeFilter } = itemsSlice.actions;

export default itemsSlice.reducer;
