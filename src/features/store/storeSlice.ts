import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    fetchGameBySlug,
    fetchGames,
    fetchGamesByGenre,
} from '../../services/apiRawg';
import { Game, GamesOverview } from '../../types/GamesInterface';
import { getPriceById } from '../../utils/generatePriceById';

interface RootState {
    game: Game | null;
    games: GamesOverview[];
    selectedGenre: string | null;
    status: 'idle' | 'loading' | 'fail';
    error: string | null;
}

const initialState: RootState = {
    game: null,
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
            if (state.game) {
                state.game.price = getPriceById(state.game.id);
            }
        },

        setGamesPrice(state) {
            state.games = state.games.map((game) => {
                return {
                    ...game,
                    price: getPriceById(game.id),
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
                state.games = action.payload.results.map((game) => {
                    return {
                        id: game.id,
                        slug: game.slug,
                        name: game.name,
                        price: game.price,
                        background_image: game.background_image,
                    };
                });
                storeSlice.caseReducers.setGamesPrice(state);
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
                state.games = action.payload.results.map((game) => {
                    return {
                        id: game.id,
                        slug: game.slug,
                        name: game.name,
                        price: game.price,
                        background_image: game.background_image,
                    };
                });
                storeSlice.caseReducers.setGamesPrice(state);
            })
            .addCase(fetchGamesByGenre.rejected, (state, action) => {
                state.status = 'fail';
                state.error = action.error.message as string | null;
            });
        // Individual game
        builder
            .addCase(fetchGameBySlug.pending, (state) => {
                state.game = null;
                state.status = 'loading';
            })
            .addCase(fetchGameBySlug.fulfilled, (state, action) => {
                state.status = 'idle';
                state.game = {
                    id: action.payload.id,
                    slug: action.payload.slug,
                    name: action.payload.name,
                    price: action.payload.price,
                    description_raw: action.payload.description_raw,
                    released: action.payload.released,
                    parent_platforms: action.payload.parent_platforms,
                    developers: action.payload.developers,
                    publishers: action.payload.publishers,
                    genres: action.payload.genres,
                    esrb_rating: action.payload.esrb_rating,
                    background_image: action.payload.background_image,
                };
                storeSlice.caseReducers.setGamePrice(state);
            })
            .addCase(fetchGameBySlug.rejected, (state, action) => {
                state.status = 'fail';
                state.error = action.error.message as string | null;
            });
    },
});

export default storeSlice.reducer;
export const { setSelectedGenre } = storeSlice.actions;
