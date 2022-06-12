import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLoginError, getSignupError } from 'helpers/getTextError';

const SIGN_UP_ENDPOINT = 'api/users/signup';
const SIGN_IN_ENDPOINT = 'api/users/login';
const SIGN_OUT_ENDPOINT = 'api/users/logout';
const GET_USER_ENDPOINT = 'api/users/current';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(SIGN_UP_ENDPOINT, credentials);
      toast.info('Супер! Перевірте свою пошту та підтвердіть реєстрацію.');
      return res.data;
    } catch (error) {
      toast.error(getSignupError(error.response.status));
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const signIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {
  try {
    const res = await axios.post(SIGN_IN_ENDPOINT, credentials);
    token.set(res.data.token);
    // toast.success('Ви успішно увійшли.');
    return res.data;
  } catch (error) {
    toast.error(getLoginError(error.response.status));
    return thunkAPI.rejectWithValue(error.message);
  }
});

const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await axios.post(SIGN_OUT_ENDPOINT);
    token.unset();
    // toast.success('Ви успішно вийшли.');
  } catch (error) {
    toast.error('Упс, щось пішло не так, спробуйте пізніше повторити :)');
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
