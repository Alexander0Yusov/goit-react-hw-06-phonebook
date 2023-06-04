import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer } from './reducer';

const persistConfig = {
  key: 'phonebook',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({ reducer: persistedReducer });

// экспорт для специфичного провайдера
export const persistor = persistStore(store);
