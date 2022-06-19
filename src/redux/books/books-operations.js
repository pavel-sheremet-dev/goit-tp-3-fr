import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAddBookError,
  getBooksError,
  getReviewError,
  getAddBookErrorEN,
  getBooksErrorEN,
  getReviewErrorEN,
} from 'helpers/getTextError';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const language = i18next.use(LanguageDetector);

const ADD_BOOK_ENDPOINT = '/api/books';
const GET_BOOK_ENDPOINT = '/api/books';

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(ADD_BOOK_ENDPOINT, book);
      return data;
    } catch (error) {
      toast.error(
        language.resolvedLanguage === 'uk'
          ? getAddBookError(error.response.status)
          : getAddBookErrorEN(error.response.status),
      );
      return rejectWithValue(error.message);
    }
  },
);

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(GET_BOOK_ENDPOINT);
      return data;
    } catch (error) {
      const { status } = error.response;
      status !== 404 &&
        toast.error(
          language.resolvedLanguage === 'uk'
            ? getBooksError(error.response.status)
            : getBooksErrorEN(error.response.status),
        );
      return rejectWithValue(error.message);
    }
  },
);

export const getUnreadBooks = createAsyncThunk(
  'books/getUnreadBooks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${GET_BOOK_ENDPOINT}?status=unread`);
      return data;
    } catch (error) {
      const { status } = error.response;
      status !== 404 &&
        toast.error(
          language.resolvedLanguage === 'uk'
            ? getBooksError(error.response.status)
            : getBooksErrorEN(error.response.status),
        );
      return rejectWithValue(error.message);
    }
  },
);

export const updateBookReview = createAsyncThunk(
  'books/updateBookReview',
  async (reqparams, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `${GET_BOOK_ENDPOINT}/${reqparams.index}`,
        reqparams.body,
      );
      return data;
    } catch (error) {
      toast.error(
        language.resolvedLanguage === 'uk'
          ? getReviewError(error.response.status)
          : getReviewErrorEN(error.response.status),
      );
      return rejectWithValue(error.message);
    }
  },
);
