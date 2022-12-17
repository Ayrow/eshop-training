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
  async ({ id, type }, { rejectWithValue }) => {
    try {
      const { data } = await authFetch.patch(`/cart/${id}`, { type });
      return data;
    } catch (error) {
      console.log('error', error);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {
    [getProductsFromCart.fulfilled]: (state, action) => {
      console.log('action.payload', action.payload);
      let totalQuantity = 0;
      let totalPrice = 0;
      const cart = action.payload;
      cart.forEach((item) => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
      });
      state.cartProducts = cart;
      state.totalProducts = totalQuantity;
      state.totalPrice = totalPrice;
    },
    [addProductToCart.fulfilled]: (state, action) => {
      state.cartProducts = [...state.cartProducts, action.payload];
    },
    [removeProductFromCart.fulfilled]: (state, action) => {
      const itemID = action.payload;
      const product = state.cartProducts.find((item) => item.id === itemID);
      state.totalProducts = state.totalProducts - product.quantity;
      state.totalPrice = state.totalPrice - product.price * product.quantity;

      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== itemID
      );
    },
    [updateQuantityProduct.fulfilled]: (state, action) => {
      state.cartProducts = action.payload;
    },
    [emptyCart.fulfilled]: (state) => {
      state.cartProducts = [];
      state.totalProducts = 0;
      state.totalPrice = 0;
    },
  },
});

// export const {  } = cartSlice.actions;
export default cartSlice.reducer;
