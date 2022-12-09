import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authFetch } from '../user/userSlice';
// import axios from 'axios';

const initialState = {
  cartProducts: [],
  totalProducts: 0,
  totalPrice: 0,
};

export const getProductsFromCart = createAsyncThunk(
  '/cart/getProductsFromCart',
  async (name, { rejectWithValue }) => {
    try {
      const resp = await authFetch.get('/cart');
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProductToCart = createAsyncThunk(
  '/cart/addProductToCart',
  async (id, { rejectWithValue }) => {
    const { data } = await authFetch.post('/cart', { id });
    console.log('data', data);
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
    // addToCart: (state, { payload }) => {
    //   state.cartProducts = [...state.cartProducts, payload];
    //   console.log('state.cartProducts', state.cartProducts);
    // },
    emptyCart: (state) => {
      state.cartProducts = [];
    },
  },
  extraReducers: {
    [getProductsFromCart.pending]: (state) => {},
    [getProductsFromCart.fulfilled]: (state, action) => {
      state.cartProducts = action.payload;
    },
    [getProductsFromCart.rejected]: (state) => {},

    [addProductToCart.pending]: (state) => {},
    [addProductToCart.rejected]: (state) => {},
    [addProductToCart.fulfilled]: (state, action) => {
      console.log('action.payload', action.payload);
      state.cartProducts = [action.payload];
      console.log('state.cartProducts', state.cartProducts);
    },
  },
});

export const { addToCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
