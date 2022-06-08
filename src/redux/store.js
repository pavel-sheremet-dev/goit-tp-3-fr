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
import booksReducer from './books/books-reducer';
import trainingsReducer from './trainings/trainings-reducer';

const persistAuthConfig = {
  key: 'local-token',
  storage,
  whitelist: ['token'],
};

const persistRootConfig = {
  key: 'books',
  storage,
};

const persistTrainingsConfig = {
  key: 'trainings',
  storage,
};

// const persistRootConfig = {
//   key: '',
//   storage,
//   whitelist: [],
// };

const rootReducer = combineReducers({
  auth: persistReducer(persistAuthConfig, authReduser),
  books: persistReducer(persistRootConfig, booksReducer),
  trainings: persistReducer(persistTrainingsConfig, trainingsReducer),
  // ... other reducers
});

const logger = createLogger({
  timestamp: false,
  collapsed: (getState, action, logEntry) => !logEntry.error,
  predicate: () => process.env.NODE_ENV !== 'production',
});

const store = configureStore({
  reducer: rootReducer,
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
