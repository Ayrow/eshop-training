import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cartProducts: [],
  totalProducts: 0,
  totalPrice: 0,
};

export const getProductsFromCart = createAsyncThunk(
  '/products/getProductsFromCart',
  async (name, { rejectWithValue }) => {
    try {
      const resp = await axios.get('/api/v1/cart/');
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProductToCart = createAsyncThunk(
  '/products/addToCart',
  async (id, { rejectWithValue }) => {
    try {
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartProducts = [...state.cartProducts, payload];
      console.log('state.cartProducts', state.cartProducts);
    },
    emptyCart: (state) => {
      state.cartProducts = [];
    },
  },
  extraReducers: {
    [getProductsFromCart.fulfilled]: (state, action) => {
      state.cartProducts = action.payload;
    },
    [addProductToCart.fulfilled]: (state, action) => {
      state.cartProducts = [...state.cartProducts, action.payload];
    },
  },
});

export const { addToCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
