import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {persistStore, persistReducer, FLUSH, REHYDRATE,PAUSE, PERSIST,PURGE, REGISTER,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);