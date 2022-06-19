import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getLoginError,
  getSignupError,
  getSignupErrorEN,
  getLoginErrorEN,
} from 'helpers/getTextError';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const language = i18next.use(LanguageDetector);

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
      toast.info(
        language.resolvedLanguage === 'uk'
          ? 'Супер! Перевірте свою пошту та підтвердіть реєстрацію.'
          : 'Super! Check your mail and confirm registration.',
      );
      return res.data;
    } catch (error) {
      toast.error(
        language.resolvedLanguage === 'uk'
          ? getSignupError(error.response.status)
          : getSignupErrorEN(error.response.status),
      );
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
    toast.error(
      language.resolvedLanguage === 'uk'
        ? getLoginError(error.response.status)
        : getLoginErrorEN(error.response.status),
    );
    return thunkAPI.rejectWithValue(error.message);
  }
});

const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await axios.post(SIGN_OUT_ENDPOINT);
    token.unset();
  } catch (error) {
    toast.error(
      language.resolvedLanguage === 'uk'
        ? 'Упс, щось пішло не так, спробуйте повторити пізніше :)'
        : 'Oops, something went wrong, try to repeat later :)',
    );
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
    const { data } = await axios.get(GET_USER_ENDPOINT);
    return data;
  } catch (error) {
    token.unset();
    return thunkAPI.rejectWithValue(error.message);
  }
});

export { signUp, signIn, signOut, getUser };
