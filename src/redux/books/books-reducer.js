import { createReducer, combineReducers } from '@reduxjs/toolkit';
import addBook from './books-actions';

const items = createReducer([], {
  [addBook]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  items,
});
