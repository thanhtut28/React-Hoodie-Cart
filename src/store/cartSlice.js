import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
};

//* find Index in state
const isInCart = (state, index) => {
    return state.findIndex(item => item.id === index);
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const index = isInCart(state.items, action.payload.id);

            state.totalPrice += action.payload.price;
            state.totalQuantity += 1;

            if (index === -1) {
                state.items.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    price: action.payload.price,
                    quantity: 1,
                    totalPrice: action.payload.price,
                    photo: action.payload.photo,
                });
            } else {
                state.items[index].totalPrice += action.payload.price;
                state.items[index].quantity += 1;
            }
        },
        removeFromCart(state, action) {
            const index = isInCart(state.items, action.payload.id);

            state.totalPrice -= state.items[index].price;
            state.totalQuantity -= 1;

            if (state.items[index].quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
            } else {
                state.items[index].totalPrice -= state.items[index].price;
                state.items[index].quantity -= 1;
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
