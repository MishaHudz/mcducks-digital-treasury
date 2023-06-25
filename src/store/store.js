import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { transactionReducer } from './transactionsSlice';
import storage from 'redux-persist/lib/storage';
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

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['accessToken', 'user'],
};
const transPersistConfig = {
  key: 'transA',
  version: 1,
  storage,
  whitelist: ['transactionExpense', 'transactionIncome'],
};

const transPersistedReducer = persistReducer(
  transPersistConfig,
  transactionReducer
);

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    transaction: transPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
