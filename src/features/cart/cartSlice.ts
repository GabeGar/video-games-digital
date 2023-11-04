import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameType } from '../../types/gamesInterfaceAndType';

interface RootState {
    cartItems: GameType[];
}

const initialState: RootState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart(state) {
            state.cartItems = [];
        },
        addToCart(state, action: PayloadAction<GameType>) {
            state.cartItems = [...state.cartItems, action.payload];
        },
        removeFromCart(state, action: PayloadAction<GameType>) {
            state.cartItems = state.cartItems.filter((game) => {
                return game.id !== action.payload.id;
            });
        },
    },
});

export default cartSlice.reducer;
export const { clearCart, addToCart, removeFromCart } = cartSlice.actions;
