import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			
			state.products.push(action.payload);
			state.quantity += 1;
			state.total += action.payload.price * action.payload.quantity;
		},
		removeProduct: (state, action) => {
			state.products.filter((cartItem) => cartItem.id !== action.payload.id);
			state.products = nextCartItems;
		},
		reset: (state) => {
			state.products = [];
			state.total = 0;
		},
	},
});

export const { addProduct, reset, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
