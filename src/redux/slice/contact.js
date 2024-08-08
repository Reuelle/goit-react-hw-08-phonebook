// src/redux/slice/contact.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { fetchContacts, addContact as asyncAddContact, deleteContact as asyncDeleteContact } from '../operation';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    addLocalContact: (state, action) => {
      state.items.push({ ...action.payload, id: uuidv4() });
    },
    deleteLocalContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(asyncAddContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(asyncDeleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload);
      });
  },
});

export const { addLocalContact, deleteLocalContact, setError, setIsLoading } = contactSlice.actions;
export default contactSlice.reducer;
