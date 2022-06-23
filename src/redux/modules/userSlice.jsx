import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* ACTION TYPE */
const LOGIN = 'userReducer/LOGIN';
const CHECK_ID = 'userReducer/CHECK_ID';
const LOGOUT = 'userReducer/LOGOUT';

/* Reducer */
export const userSlice = createSlice({
  name : 'user',
  initialState : {
    userName : '',
    userId : '',
    idCheck : false,
    loading : false,
    error : null,
    success : false
  },
  reducers : {},
  extraReducers : builder => {
    builder.addCase(login, pending, state => {
      state.loading = true;
    })
    builder.addCase()
  }
})