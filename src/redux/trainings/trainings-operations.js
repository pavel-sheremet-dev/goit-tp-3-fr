import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjlmOWRkNDg4M2VkNmQ5YTI4M2QxMDUiLCJwZXJtaXNzaW9ucyI6W251bGxdLCJpYXQiOjE2NTQ2ODUyOTQsImV4cCI6MTY1NDc3MTY5NH0.cHzHXORYAD00LM2VdotUPVbW6R6EhDPHFLQMhPKoVgs';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export const fetchYear = createAsyncThunk(
  'trainings/fetchYear',
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get('/api/trainings');
      console.log('Hallo');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
