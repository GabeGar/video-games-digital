import { createSlice } from '@reduxjs/toolkit';
import { GamesOverview } from '../../../types/GamesInterface';
import { fetchGamesByQuery } from '../../../services/apiRawg';

interface RootState {
    isSearchMenuOpen: boolean;
    games: GamesOverview[];
    status: 'idle' | 'loading' | 'fail';
    error: string | null;
}

const initialState: RootState = {
    isSearchMenuOpen: false,
    games: [],
    status: 'idle',
    error: '',
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchGamesByQuery.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGamesByQuery.fulfilled, (state, action) => {
                state.status = 'idle';
                state.games = action.payload.results;
            })
            .addCase(fetchGamesByQuery.rejected, (state, action) => {
                state.status = 'fail';
                state.error = action.error.message as string | null;
            });
    },
});

export default searchMenuOverlaySlice.reducer;
export const { openSearchMenuOverlay, closeSearchMenuOverlay } =
    searchMenuOverlaySlice.actions;
