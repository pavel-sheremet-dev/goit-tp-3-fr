import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks, addBook } from './books-operations';

const initialState = {
  data: { items: [], loading: false, error: null },
  filter: '',
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, state => {
        state.data.error = null;
        state.data.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, { payload }) => {
        state.data.items = payload;
        state.data.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, { payload }) => {
        state.data.error = payload;
        state.data.loading = false;
      })
      .addCase(addBook.pending, state => {
        state.data.error = null;
        state.data.loading = true;
      })
      .addCase(addBook.fulfilled, (state, { payload }) => {
        state.data.items = [payload, ...state.data.items];
        state.data.loading = false;
      })
      .addCase(addBook.rejected, (state, { payload }) => {
        state.data.error = payload;
        state.data.loading = false;
      });
  },
});

export const { changeFilter } = itemsSlice.actions;

export default itemsSlice.reducer;
