// src/redux/slice/contact.js (or contactSlice.js)
import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    // Other reducers...
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer; // Ensure this is the default export
