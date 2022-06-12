import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authReduser from './auth/auth-slice';
import booksReducer from './books/books-slice';
import trainingReducer from './training/training-slice';

const persistAuthConfig = {
  key: 'local-token',
  storage,
  whitelist: ['token'],
};

const persistBooksConfig = {
  key: 'local-books',
  storage,
  whitelist: [],
};

const persistTrainingConfig = {
  key: 'local-training',
  storage,
  whitelist: [],
};

const persistRootConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistAuthConfig, authReduser),
  books: persistReducer(persistBooksConfig, booksReducer),
  training: persistReducer(persistTrainingConfig, trainingReducer),

  // ... other reducers
});

const logger = createLogger({
  timestamp: false,
  collapsed: (getState, action, logEntry) => !logEntry.error,
  predicate: () => process.env.NODE_ENV !== 'production',
});

const store = configureStore({
  reducer: persistReducer(persistRootConfig, rootReducer),
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
    // otherMiddlewares,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export { store, persistor };
