import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');

const initialState = {
  loading: false,
  user: user ? JSON.parse(user) : null, // for user object
  error: null,
  token: token,
  success: false, // for monitoring the registration process
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

const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

export const registerUser = createAsyncThunk(
  'users/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await authFetch.post('/auth/register', {
        email,
        password,
      });
      const { user, token } = data;
      addUserToLocalStorage({ user, token });
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
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
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

// export const {} = userSlice.actions;
export default userSlice.reducer;
