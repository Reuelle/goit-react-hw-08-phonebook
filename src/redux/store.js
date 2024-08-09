import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

// Import reducers
import { filterReducer } from './slice/filter';
import { contactsReducer } from './slice/contact';
import authReducer from './slice/auth-slice'; // Adjust the path if necessary

// Configuration for redux-persist
const persistConfig = {
  key: 'root', // This is the key for the persisted state
  storage,
};

// Combine reducers into a rootReducer
const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
  auth: authReducer, // Add the auth reducer here
});

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create persistor to manage the persisted state
export const persistor = persistStore(store);
