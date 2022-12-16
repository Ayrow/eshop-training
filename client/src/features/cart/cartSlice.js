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
      const { data } = await authFetch.delete(`/cart/${id}`);
      return data;
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const emptyCart = createAsyncThunk(
  '/cart/emptyCart',
  async (name, { rejectWithValue }) => {
    try {
      await authFetch.delete('/cart');
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const updateQuantityProduct = createAsyncThunk(
  '/cart/updateQuantityProduct',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await authFetch.post(`/cart/${id}`);
      console.log('data', data);
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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
      console.log('state.cartProducts', state.cartProducts);
    },
    [removeProductFromCart.fulfilled]: (state, action) => {
      const itemID = action.payload;
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== itemID
      );
    },
    [updateQuantityProduct.fulfilled]: (state, action) => {},
    [emptyCart.fulfilled]: (state) => {
      state.cartProducts = [];
    },
  },
});

// export const {  } = cartSlice.actions;
export default cartSlice.reducer;
