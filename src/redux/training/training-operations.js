import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addSelectBook = createAsyncThunk(
  'training/addSelectBook',
  async (book, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('', book);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
