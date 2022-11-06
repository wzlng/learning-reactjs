import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loginWithEmailPassword = createAsyncThunk('auth/loginWithEmailPassword', () => {
  // TODO: Logic login.
});

export const registerWithEmailPassword = createAsyncThunk('auth/registerWithEmailPassword', () => {
  // TODO: Register login.
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', () => {
  // TODO: Forgot password login.
});

export const resetPassword = createAsyncThunk('auth/resetPassword', () => {
  // TODO: Reset password login.
});

export const vefifyCode = createAsyncThunk('auth/vefifyCode', () => {
  // TODO: Verify code login.
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null
  },
  extraReducers(builder) {
    builder
      .addCase(loginWithEmailPassword.pending, (state) => {})
      .addCase(loginWithEmailPassword.fulfilled, (state) => {})
      .addCase(loginWithEmailPassword.rejected, (state) => {});
  },
  reducers: {
    example1: (state) => {},
    example2: (state) => {}
  }
});

export const { example1, example2 } = authSlice.actions;

export default authSlice.reducer;
