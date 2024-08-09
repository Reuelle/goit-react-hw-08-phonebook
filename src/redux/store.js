import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import { filterReducer } from './slice/filter';
import { contactsReducer } from './slice/contact';
// Remove import for authReducer

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
  // Remove the auth reducer from here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
