import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_TRAINING_ENDPOINT = '/api/trainings';
const GET_ACTIVE_TRAINING_ENDPOINT = '/api/trainings/';
const UPDATE_ACTIVE_TRAINING_ENDPOINT = '/api/trainings//';

export const addTraining = createAsyncThunk(
  'training/addTraining',
  async ({ startDate, deadlineDate, books: book }, { rejectWithValue }) => {
    const books = book.map(({ id, pages }) => ({ id, pages }));
    try {
      const { data } = await axios.post(ADD_TRAINING_ENDPOINT, {
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
  'training/getActiveTraining',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(GET_ACTIVE_TRAINING_ENDPOINT);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const updateActiveTraining = createAsyncThunk(
  'training/updateActiveTraining',
  async ({ date, pointResult }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(UPDATE_ACTIVE_TRAINING_ENDPOINT, {
        date,
        pointResult,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
