import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // Install uuid package if you haven't

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() }); // Add unique ID
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    // Other reducers...
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
