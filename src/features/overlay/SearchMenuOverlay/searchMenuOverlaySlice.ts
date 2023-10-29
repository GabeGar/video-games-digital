import { createSlice } from '@reduxjs/toolkit';

interface RootState {
    searchMenuOverlay: {
        isSearchMenuOpen: boolean;
    };
}

const initialState = {
    isSearchMenuOpen: false,
};

const searchMenuOverlaySlice = createSlice({
    name: 'searchMenu',
    initialState,
    reducers: {
        openSearchMenuOverlay(state) {
            state.isSearchMenuOpen = true;
        },
        closeSearchMenuOverlay(state) {
            state.isSearchMenuOpen = false;
        },
    },
});

export default searchMenuOverlaySlice.reducer;
export const { openSearchMenuOverlay, closeSearchMenuOverlay } =
    searchMenuOverlaySlice.actions;

export const getSearchMenuOverlayState = (state: RootState): boolean =>
    state.searchMenuOverlay.isSearchMenuOpen;
