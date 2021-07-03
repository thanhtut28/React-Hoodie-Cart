import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCheckouted: false,
    formIsSubmitted: false,
};

export const formSubmitAsync = createAsyncThunk('checkout/formSubmitAsync', async payload => {
    await fetch('https://react-hoodie-cart-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ orderedItems: payload.cart, user: payload.user }),
    });
});

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        checkout(state) {
            state.isCheckouted = true;
        },
        undoCheckout(state) {
            state.isCheckouted = false;
        },
    },
    extraReducers: {
        [formSubmitAsync.fulfilled]: state => {
            state.formIsSubmitted = true;
            state.isCheckouted = false;
        },
    },
});

export const { checkout, undoCheckout } = checkoutSlice.actions;

export default checkoutSlice.reducer;
