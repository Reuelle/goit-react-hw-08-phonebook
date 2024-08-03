import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from '../../redux/operation';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});

export const { resetError } = authSlice.actions;
export default authSlice.reducer;
