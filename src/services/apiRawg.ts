import { createAsyncThunk } from '@reduxjs/toolkit';

import { Game, GamesResults } from '../types/gamesInterfaceAndType';
import { ImportMetaEnv } from '../vite-env';

const BASE_API = import.meta.env
    .VITE_RAWG_ENDPOINT as ImportMetaEnv['VITE_RAWG_ENDPOINT'];
const API_KEY = import.meta.env.VITE_AUTH_KEY as ImportMetaEnv['VITE_AUTH_KEY'];

export const fetchGames = createAsyncThunk('store/fetchGames', async () => {
    try {
        const response = await fetch(
            `${BASE_API}/games?page_size=40&metacritic=90,95&key=${API_KEY}`,
        );

        if (!response.ok)
            throw new Error('Something went wrong getting the games.');

        const data = (await response.json()) as GamesResults;
        return data;
    } catch (error) {
        throw new Error((error as Error).message);
    }
});

export const fetchGamesByGenre = createAsyncThunk(
    'store/fetchGamesByGenre',
    async (genre: string) => {
        try {
            const response = await fetch(
                `${BASE_API}/games?genres=${genre}&page_size=40&ordering=released&key=${API_KEY}`,
            );

            if (!response.ok)
                throw new Error('Something went wrong getting the games.');

            const data = (await response.json()) as GamesResults;
            return data;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },
);

export const fetchGamesByQuery = createAsyncThunk(
    'store/fetchGamesByQuery',
    async (query: string) => {
        try {
            const response = await fetch(
                `${BASE_API}/games?page_size=40&search=${query}&key=${API_KEY}`,
            );

            if (!response.ok)
                throw new Error('Something went wrong getting the games.');

            const data = (await response.json()) as GamesResults;
            return data;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },
);

export const fetchGameBySlug = createAsyncThunk(
    'store/fetchGameBySlug',
    async (slug: string) => {
        try {
            const response = await fetch(
                `${BASE_API}/games/${slug}?key=${API_KEY}`,
            );

            if (!response.ok)
                throw new Error('Something went wrong getting the game.');

            const data = (await response.json()) as Game;
            return data;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    },
);
