import { Store, configureStore } from '@reduxjs/toolkit';

import mobileMenuOverlayReducer from './features/overlay/mobileMenuOverlaySlice';

const store: Store = configureStore({
    reducer: {
        mobileMenuOverlay: mobileMenuOverlayReducer,
    },
});

export default store;
