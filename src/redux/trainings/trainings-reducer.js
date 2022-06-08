import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchYear } from './trainings-operations';

const year = createReducer(null, {
  [fetchYear.fulfilled]: (_, action) => {
    console.log('Hallo');
    console.log(action.payload);
    return action.payload;
  },
});

export default combineReducers({
  year,
});
