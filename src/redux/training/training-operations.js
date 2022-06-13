import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTrainingError } from 'helpers/getTextError';

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
      toast.error('Упс, щось пішло не так, спробуйте повторити пізніше :)');
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
      toast.error(getTrainingError(error.response.status));
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
      toast.error(getTrainingError(error.response.status));
      return rejectWithValue(error.message);
    }
  },
);
