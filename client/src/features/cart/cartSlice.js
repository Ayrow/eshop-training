import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: [],
  totalProducts: 0,
  totalPrice: 0,
};

export const addProductToCart = createAsyncThunk(
  '/products/addToCart',
  async (id, { rejectWithValue }) => {
    try {
    } catch (error) {}
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
});

export const { addToCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
