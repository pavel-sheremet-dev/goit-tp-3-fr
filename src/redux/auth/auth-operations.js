import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const SIGN_UP_ENDPOINT = 'api/users/signup';
const SIGN_IN_ENDPOINT = 'api/users/login';
const SIGN_OUT_ENDPOINT = 'api/users/logout';
const GET_USER_ENDPOINT = 'api/users/current';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  // set(token) {
  //   axios.defaults.headers.common.Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmEyMzU2MWE2YTViOTAyODU4ZWYwZDAiLCJwZXJtaXNzaW9ucyI6W251bGxdLCJpYXQiOjE2NTQ4NjYzMzMsImV4cCI6MTY1NDk1MjczM30.j7tVcwUTROBNU7-s_N6hHEWGKQAHyHmOWim8V6_Cj6c";
  // },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(SIGN_UP_ENDPOINT, credentials);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const signIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post(SIGN_IN_ENDPOINT, credentials);
    token.set(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await axios.get(SIGN_OUT_ENDPOINT);
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token;

  if (!savedToken) {
    return thunkAPI.rejectWithValue();
  }

  token.set(savedToken);

  try {
    const res = await axios.get(GET_USER_ENDPOINT);
    return res.data;
  } catch (error) {
    token.unset();
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { signUp, signIn, signOut, getUser };
