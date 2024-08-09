import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import contactsReducer from './slice/contact';
import { filterReducer } from './slice/filter';
import { authReducer } from './Auth/Auth-slice';

// Configure persistence for contacts as well
const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], // Persist only token in auth
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: persistReducer(contactsPersistConfig, contactsReducer), // Persist contacts
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
