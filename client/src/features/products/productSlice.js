import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  allProducts: [],
};

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (name, { rejectWithValue }) => {
    try {
      const resp = await axios.get('/api/v1/products/');
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state) => {},
    [getAllProducts.fulfilled]: (state, action) => {
      state.allProducts = action.payload;
    },
    [getAllProducts.rejected]: (state) => {},
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
