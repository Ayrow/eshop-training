import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface UserState {
  username: String;
  email: String;
  token: String;
  isFetching: boolean;
  isSuccess: boolean;
  isError: false;
  errorMessage: String;
}

const initialState: UserState = {
  username: '',
  email: '',
  token: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

const authFetch = axios.create({
  baseURL: '/api/v1',
});

authFetch.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${initialState.token}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export const signupUser = createAsyncThunk(
  'users/signupUser',
  async ({ email, password }, thunkAPI) => {
    try {
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
    } catch (error) {}
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
