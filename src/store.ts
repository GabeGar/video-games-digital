import { configureStore } from '@reduxjs/toolkit';

import mobileMenuOverlayReducer from './features/overlay/MobileModalOverlay/mobileMenuOverlaySlice';
import searchMenuOverlayReducer from './features/overlay/SearchMenuOverlay/searchMenuOverlaySlice';
import storeReducer from './features/store/storeSlice';
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
    reducer: {
        mobileMenuOverlay: mobileMenuOverlayReducer,
        searchMenuOverlay: searchMenuOverlayReducer,
        store: storeReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
