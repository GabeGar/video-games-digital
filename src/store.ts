import { Store, configureStore } from '@reduxjs/toolkit';

import mobileMenuOverlayReducer from './features/overlay/MobileModalOverlay/mobileMenuOverlaySlice';
import searchMenuOverlayReducer from './features/overlay/SearchMenuOverlay/searchMenuOverlaySlice';

const store: Store = configureStore({
    reducer: {
        mobileMenuOverlay: mobileMenuOverlayReducer,
        searchMenuOverlay: searchMenuOverlayReducer,
    },
});

export default store;
