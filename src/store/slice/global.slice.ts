import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  userInfo: '',
  language: '',
};

export const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setToken(state, { payload }) {
      state.token = payload;
    },
  },
  extraReducers: {},
});

export const { setToken } = slice.actions;

export default slice.reducer;
