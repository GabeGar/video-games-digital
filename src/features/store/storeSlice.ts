import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchGames, fetchGamesByGenre } from '../../services/apiRawg';
import { GamesOverview } from '../../types/GamesInterface';
import { generatePriceById } from '../../utils/generatePriceById';
import { priceRanges } from '../../common/customPriceRanges';

interface RootState {
    games: GamesOverview[];
    selectedGenre: string | null;
    status: 'idle' | 'loading' | 'fail';
    error: string | null;
}

const initialState: RootState = {
    games: [],
    selectedGenre: 'top',
    status: 'idle',
    error: '',
};

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setGamePrice(state) {
            state.games = state.games.map((game) => {
                return {
                    ...game,
                    price: generatePriceById(game.id, priceRanges),
                };
            });
        },
        setSelectedGenre(state, action: PayloadAction<string>) {
            state.selectedGenre = action.payload;
        },
    },
    extraReducers: (builder) => {
        // Default Top Games
        builder
            .addCase(fetchGames.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.status = 'idle';
                state.games = action.payload.results;
                storeSlice.caseReducers.setGamePrice(state);
            })
            .addCase(fetchGames.rejected, (state, action) => {
                state.status = 'fail';
                state.error = action.error.message as string | null;
            });
        // Genre specific games
        builder
            .addCase(fetchGamesByGenre.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGamesByGenre.fulfilled, (state, action) => {
                state.status = 'idle';
                state.games = action.payload.results;
                storeSlice.caseReducers.setGamePrice(state);
            })
            .addCase(fetchGamesByGenre.rejected, (state, action) => {
                state.status = 'fail';
                state.error = action.error.message as string | null;
            });
    },
});

export default storeSlice.reducer;
export const { setSelectedGenre } = storeSlice.actions;
