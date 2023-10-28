import { createSlice } from '@reduxjs/toolkit';

interface RootState {
    overlay: {
        isOpen: boolean;
    };
}

const initialState = {
    isOpen: false,
};

const overlaySlice = createSlice({
    name: 'overlay',
    initialState,
    reducers: {
        openOverlay(state) {
            state.isOpen = true;
        },
        closeOverlay(state) {
            state.isOpen = false;
        },
    },
});

export default overlaySlice.reducer;
export const { openOverlay, closeOverlay } = overlaySlice.actions;

export const getOverlayState = (state: RootState): boolean =>
    state.overlay.isOpen;
