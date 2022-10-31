import { register, logIn, logOut, userCurrent } from './operation';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isCurrent: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [userCurrent.pending](state) {
      state.isCurrent = true;
    },
    [userCurrent.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isCurrent = false;
    },
    [userCurrent.rejected](state) {
      state.isCurrent = false;
    },
  },
});

export const authReducer = authSlice.reducer;
