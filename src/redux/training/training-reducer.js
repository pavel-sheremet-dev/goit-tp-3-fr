import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  startDateTraining,
  deadlineDateTraining,
  addSelectBook,
  deleteBook,
} from './training-actions';

const startDate = createReducer('', {
  [startDateTraining]: (_, { payload }) => payload,
});

const deadlineDate = createReducer('', {
  [deadlineDateTraining]: (_, { payload }) => payload,
});

const books = createReducer([], {
  [addSelectBook]: (state, { payload }) => [...state, payload],
  [deleteBook]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({
  books,
  startDate,
  deadlineDate,
});
