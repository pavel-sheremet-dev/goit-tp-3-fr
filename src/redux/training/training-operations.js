import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const TRAINING_ENDPOINT = 'api/trainings';

export const addTraining = createAsyncThunk(
  'trainings/addTraining',
  async ({ startDate, deadlineDate, books: book }, { rejectWithValue }) => {
    const books = book.map(({ id, pages }) => ({ id, pages }));
    try {
      const { data } = await axios.post(TRAINING_ENDPOINT, {
        startDate,
        deadlineDate,
        books,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getActiveTraining = createAsyncThunk(
  'trainings/getActiveTraining',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(TRAINING_ENDPOINT);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateActiveTraining = createAsyncThunk(
  'trainings/updateActiveTraining',
  async ({ date, pointResult }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(TRAINING_ENDPOINT, {
        date,
        pointResult,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
