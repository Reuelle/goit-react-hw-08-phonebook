import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://connections-api.goit.global/auth/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      localStorage.setItem('contacts', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, newContact);
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      contacts.push(response.data);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${contactId}`);
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const updatedContacts = contacts.filter(contact => contact.id !== contactId);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
