import { createSlice } from '@reduxjs/toolkit';

import { fetchGames, fetchGamesByGenre } from '../../services/apiRawg';
import { GamesOverview } from '../../types/GamesInterface';
import { generateRandomPrice } from '../../utils/generateRandomPrice';

interface RootState {
    games: GamesOverview[];
    selectedGenre: string | null;
    status: 'idle' | 'loading' | 'fail';
    error: string | null;
}

const initialState: RootState = {
    games: [],
    selectedGenre: null,
    status: 'idle',
    error: '',
};

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setRandomPrice(state) {
            state.games = state.games.map((game) => {
                return {
                    ...game,
                    price: generateRandomPrice(),
                };
            });
        },
    },
    extraReducers: (builder) => {
        // Newly Released Games
        builder
            .addCase(fetchGames.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.status = 'idle';
                state.games = action.payload.results;
                storeSlice.caseReducers.setRandomPrice(state);
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
                storeSlice.caseReducers.setRandomPrice(state);
            })
            .addCase(fetchGamesByGenre.rejected, (state, action) => {
                state.status = 'fail';
                state.error = action.error.message as string | null;
            });
    },
});

export default storeSlice.reducer;
