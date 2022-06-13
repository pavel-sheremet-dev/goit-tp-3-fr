import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAddBookError,
  getBooksError,
  getReviewError,
} from 'helpers/getTextError';

const ADD_BOOK_ENDPOINT = '/api/books';
const GET_BOOK_ENDPOINT = '/api/books';

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(ADD_BOOK_ENDPOINT, book);
      return data;
    } catch (error) {
      toast.error(getAddBookError(error.response.status));
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
      toast.error(getBooksError(error.response.status));
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
      toast.error(getBooksError(error.response.status));
      return rejectWithValue(error.message);
    }
  },
);

export const updateBookReview = createAsyncThunk(
  'books/updateBookReview',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(GET_BOOK_ENDPOINT, body);
      return data;
    } catch (error) {
      toast.error(getReviewError(error.response.status));
      return rejectWithValue(error.message);
    }
  },
);
