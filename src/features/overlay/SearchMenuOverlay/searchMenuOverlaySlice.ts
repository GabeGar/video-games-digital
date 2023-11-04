import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchGamesByQuery } from '../../../services/apiRawg';
import { GamesOverview } from '../../../types/GamesInterface';
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
            searchMenuOverlaySlice.caseReducers.resetSearch(state);
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
        clearSearchedGames(state) {
            state.games = [];
        },
        resetSearch(state) {
            state.searchQuery = '';
            searchMenuOverlaySlice.caseReducers.clearSearchedGames(state);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGamesByQuery.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGamesByQuery.fulfilled, (state, action) => {
                state.status = 'idle';
                state.games = action.payload.results.map((game) => {
                    return {
                        id: game.id,
                        slug: game.slug,
                        name: game.name,
                        price: game.price,
                        background_image: game.background_image,
                    };
                });
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
    clearSearchedGames,
    resetSearch,
} = searchMenuOverlaySlice.actions;
