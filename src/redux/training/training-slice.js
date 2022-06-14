import { createSlice } from '@reduxjs/toolkit';
import {
  addTraining,
  getActiveTraining,
  updateActiveTraining,
} from './training-operations';

const initialState = {
  training: {
    id: null,
    status: null,
    startDate: null,
    deadlineDate: null,
    totalPages: null,
    readedPages: null,
    books: [],
    results: [],
    owner: null,
  },

  firstLoading: false,
  loading: false,
  error: null,
};

const trainingSlice = createSlice({
  name: 'training',
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
        state.training = payload;
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
        state.firstLoading = false;
      })
      .addCase(getActiveTraining.fulfilled, (state, { payload }) => {
        state.training = payload;
        state.loading = false;
        state.firstLoading = true;
      })
      .addCase(getActiveTraining.rejected, (state, { payload }) => {
        state.training = initialState.training;
        state.loading = false;
        state.error = payload;
        state.firstLoading = true;
      })
      // updateActiveTraining
      .addCase(updateActiveTraining.pending, (state, _) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateActiveTraining.fulfilled, (state, { payload }) => {
        state.training = payload;
        state.loading = false;
      })
      .addCase(updateActiveTraining.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default trainingSlice.reducer;
