// redux/slice/contact.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push({ ...action.payload, id: uuidv4() });
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addContact, deleteContact, setError, setIsLoading } = contactSlice.actions;
export default contactSlice.reducer; // Ensure this is a default export
