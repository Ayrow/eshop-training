import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
