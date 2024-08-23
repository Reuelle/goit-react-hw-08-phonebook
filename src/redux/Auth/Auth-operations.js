
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Set the base URL for axios requests
axios.defaults.baseURL = 'https://expense-tracker.b.goit.study/';


// Function to set the Authorization header for axios requests
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Function to clear the Authorization header
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Asynchronous thunk for user registration
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      // Make a POST request to the signup endpoint with user credentials
      const response = await axios.post('/users/signup', credentials);
      // Set the Authorization header with the token received
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      // Reject the promise with an error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Asynchronous thunk for user login
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      // Make a POST request to the login endpoint with user credentials
      const response = await axios.post('/users/login', credentials);
      // Set the Authorization header with the token received
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      // Reject the promise with an error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Asynchronous thunk for user logout
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      // Make a POST request to the logout endpoint
      await axios.post('/users/logout');
      // Clear the Authorization header
      clearAuthHeader();
    } catch (error) {
      // Reject the promise with an error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Asynchronous thunk to refresh user data
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Get the state from thunkAPI to retrieve the persisted token
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    // If there is no token, reject the promise with an error message
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // Set the Authorization header with the persisted token
      setAuthHeader(persistedToken);
      // Make a GET request to the current user endpoint
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      // Reject the promise with an error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
