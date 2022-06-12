import { createSlice } from '@reduxjs/toolkit';
import {
  addTraining,
  getActiveTraining,
  updateActiveTraining,
} from './training-operations';

const initialState = {
  startDate: null,
  deadlineDate: null,
  books: { id: null, pages: null },

  date: null,
  pointResult: null,

  loading: false,
  error: null,
};

const trainingSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // addTraining
      .addCase(addTraining.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTraining.fulfilled, (state, { payload }) => {
        state.startDate = payload.startDate;
        state.deadlineDate = payload.deadlineDate;
        state.books.id = payload.books.id;
        state.books.pages = payload.books.pages;
        state.loading = false;
      })
      .addCase(addTraining.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // getActiveTraining
      .addCase(getActiveTraining.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getActiveTraining.fulfilled, (state, { payload }) => {
        state.books = payload;
        state.loading = false;
      })
      .addCase(getActiveTraining.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // updateActiveTraining
      .addCase(updateActiveTraining.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateActiveTraining.fulfilled, (state, { payload }) => {
        state.date = payload.date;
        state.pointResult = payload.pointResult;
        state.loading = false;
      })
      .addCase(updateActiveTraining.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default trainingSlice.reducer;
