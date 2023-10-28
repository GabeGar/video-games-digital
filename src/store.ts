import { Store, configureStore } from '@reduxjs/toolkit';

import overlayReducer from './features/overlay/overlaySlice';

const store: Store = configureStore({
    reducer: {
        overlay: overlayReducer,
    },
});

export default store;
