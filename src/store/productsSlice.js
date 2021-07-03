import { createSlice } from '@reduxjs/toolkit';
import { DUMMY_PRODUCTS } from '../dummy';

const productsSlice = createSlice({
    name: 'products',
    initialState: DUMMY_PRODUCTS,
});

export default productsSlice.reducer;
