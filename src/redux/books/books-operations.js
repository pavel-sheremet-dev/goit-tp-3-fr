import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_BOOK_ENDPOINT = '/api/books/';
const ADD_BOOK_ENDPOINT = '/api/books';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(FETCH_BOOK_ENDPOINT);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(ADD_BOOK_ENDPOINT, book);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getBooks = createAsyncThunk(
  'books/addBook',
  async (book, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(ADD_BOOK_ENDPOINT, book);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getUnreadBooks = createAsyncThunk(
  'books/addBook',
  async (book, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(ADD_BOOK_ENDPOINT, book);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
