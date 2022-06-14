import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK_ENDPOINT = '/api/books';
const GET_BOOK_ENDPOINT = '/api/books';

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(ADD_BOOK_ENDPOINT, book);
      return data;
    } catch (error) {
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
      return rejectWithValue(error.message);
    }
  },
);
