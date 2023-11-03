import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GamesOverview } from '../../../types/GamesInterface';
import { fetchGamesByQuery } from '../../../services/apiRawg';
import { getPriceById } from '../../../utils/generatePriceById';

interface RootState {
    isSearchMenuOpen: boolean;
    searchQuery: string;
    games: GamesOverview[];
    status: 'idle' | 'loading' | 'fail';
    error: string | null;
}

const initialState: RootState = {
    isSearchMenuOpen: false,
    searchQuery: '',
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
            searchMenuOverlaySlice.caseReducers.resetSearchFields(state);
        },
        setSearchedGamesPricing(state) {
            state.games = state.games.map((game) => {
                return {
                    ...game,
                    price: getPriceById(game.id),
                };
            });
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
        },
        resetSearchedGames(state) {
            state.games = [];
        },
        resetSearchFields(state) {
            state.games = [];
            state.searchQuery = '';
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
                searchMenuOverlaySlice.caseReducers.setSearchedGamesPricing(
                    state,
                );
            })
            .addCase(fetchGamesByQuery.rejected, (state, action) => {
                state.status = 'fail';
                state.error = action.error.message as string | null;
            });
    },
});

export default searchMenuOverlaySlice.reducer;
export const {
    openSearchMenuOverlay,
    closeSearchMenuOverlay,
    setSearchQuery,
    resetSearchedGames,
    resetSearchFields,
} = searchMenuOverlaySlice.actions;
