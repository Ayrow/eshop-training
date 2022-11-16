import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process
};

const authFetch = axios.create({
  baseURL: '/api/v1',
});

authFetch.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer ${initialState.userToken}`,
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

export const registerUser = createAsyncThunk(
  'users/register',
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      await authFetch.post('/auth/register', { firstName, email, password });
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
    } catch (error) {}
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
