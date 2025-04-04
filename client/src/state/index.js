import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },

        addToCart: (state, action) => {
            const newItem = {
                ...action.payload.item,
                count: action.payload.item.count ?? 1, // Ensure count starts at 1 if undefined
            };
            state.cart = [...state.cart, newItem];
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        increaseCount: (state, action) => {
            console.log("Increase count action received for ID:", action.payload.id);
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    console.log("Item found:", item);
                    item.count++;
                    console.log("New count:", item.count);
                }
                return item;
            });
        },

        decreaseCount: (state, action) => {
            console.log("Decrease count action received for ID:", action.payload.id);
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    if (item.count > 1) {
                        console.log("Item found:", item);
                        item.count--;
                        console.log("New count:", item.count);
                    } else {
                        console.log("Item count is already at minimum (1).");
                    }
                }
                return item;
            });
        },


        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
    },
});

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;