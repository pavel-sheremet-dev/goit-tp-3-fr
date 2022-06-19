import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTrainingError, getTrainingErrorEN } from 'helpers/getTextError';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const language = i18next.use(LanguageDetector);

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
      toast.error(
        language.resolvedLanguage === 'uk'
          ? 'Упс, щось пішло не так, спробуйте повторити пізніше :)'
          : 'Oops, something went wrong, try to repeat later :)',
      );
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
      const { status } = error.response;
      status !== 404 &&
        toast.error(
          language.resolvedLanguage === 'uk'
            ? getTrainingError(error.response.status)
            : getTrainingErrorEN(error.response.status),
        );
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
      const { status } = error.response;
      status !== 404 &&
        toast.error(
          language.resolvedLanguage === 'uk'
            ? getTrainingError(error.response.status)
            : getTrainingErrorEN(error.response.status),
        );
      return rejectWithValue(error.message);
    }
  },
);
