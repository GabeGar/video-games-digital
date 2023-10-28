import { createSlice } from '@reduxjs/toolkit';

interface RootState {
    mobileMenuOverlay: {
        isMobileMenuOpen: boolean;
    };
}

const initialState = {
    isMobileMenuOpen: false,
};

const mobileMenuOverlaySlice = createSlice({
    name: 'mobileMenu',
    initialState,
    reducers: {
        openMobileMenuOverlay(state) {
            state.isMobileMenuOpen = true;
        },
        closeMobileMenuOverlay(state) {
            state.isMobileMenuOpen = false;
        },
    },
});

export default mobileMenuOverlaySlice.reducer;
export const { openMobileMenuOverlay, closeMobileMenuOverlay } =
    mobileMenuOverlaySlice.actions;

export const getMobileMenuOverlayState = (state: RootState): boolean =>
    state.mobileMenuOverlay.isMobileMenuOpen;
