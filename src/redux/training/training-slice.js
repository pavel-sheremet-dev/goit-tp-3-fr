import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startDate: null,
  deadlineDate: null,

  books: [],
};

const trainingSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    addBooks: (state, { payload }) => {
      state.books = payload;
    },
    deleteBook: (state, { payload }) => {
      state.books = state.books.filter(({ _id }) => _id !== payload);
    },
    addTraining: (state, { payload }) => {
      state.startDate = payload.startDate;
      state.deadlineDate = payload.deadlineDate;
      state.books = payload.books;
    },
  },
  extraReducers: {},
});

export const { addBook, addBooks, addTraining, deleteBook } =
  trainingSlice.actions;

export default trainingSlice.reducer;
