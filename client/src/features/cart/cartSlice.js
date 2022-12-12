import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authFetch } from '../user/userSlice';
// import axios from 'axios';

const initialState = {
  cartProducts: [],
  quantity: 0,
  totalProducts: 0,
  totalPrice: 0,
};

export const getProductsFromCart = createAsyncThunk(
  '/cart/getProductsFromCart',
  async (name, { rejectWithValue }) => {
    try {
      const { data } = await authFetch.get('/cart');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProductToCart = createAsyncThunk(
  '/cart/addProductToCart',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await authFetch.post('/cart', { id });
      const { product } = data;
      return product;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeProductFromCart = createAsyncThunk(
  '/cart/removeProductFromCart',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await authFetch.delete(`cart/${id}`);
      return data;
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem: (state, { payload }) => {},
    increase: (state) => {},
    decrease: (state) => {},
    calculateTotals: (state) => {},
  },
  extraReducers: {
    [getProductsFromCart.fulfilled]: (state, action) => {
      state.cartProducts = action.payload;
    },
    [addProductToCart.fulfilled]: (state, action) => {
      state.cartProducts = [...state.cartProducts, action.payload];
    },
    [removeProductFromCart.fulfilled]: (state, action) => {
      const itemID = action.payload;
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== itemID
      );
    },
  },
});

export const { addToCart, emptyCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
