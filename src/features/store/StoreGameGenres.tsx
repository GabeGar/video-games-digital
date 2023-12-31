import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks';
import { fetchGames, fetchGamesByGenre } from '../../services/apiRawg';
import { sortedGenresData } from '../../common/genresData';
import { setSelectedGenre } from './storeSlice';

const StoreGameGenres = () => {
    const dispatch = useAppDispatch();
    const currentGenre = useAppSelector((state) => state.store.selectedGenre);

    useEffect(() => {
        // 'top' is NOT an actual genre. Only fetch genres that are not top with the following dispatch, else use the default.
        if (currentGenre !== 'top') {
            void (async () => {
                await dispatch(fetchGamesByGenre(currentGenre));
            })();
        }

        if (currentGenre === 'top') {
            void (async () => {
                await dispatch(fetchGames());
            })();
        }
    }, [dispatch, currentGenre]);

    const handleGenreClick = (genre: string) => {
        // prevent a wasteful re-fetch of the currently displayed games genre.
        if (currentGenre === genre) return;

        dispatch(setSelectedGenre(genre));
    };

    return (
        <aside className="flex max-h-[35rem] gap-2 overflow-x-auto scroll-smooth pr-6 lg:sticky lg:top-4 lg:h-full lg:flex-col lg:overflow-y-scroll">
            <h2 className="hidden text-center text-2xl font-semibold text-primary-purple lg:block">
                Genres
            </h2>
            {sortedGenresData.map((genre) => (
                <button
                    key={genre.id}
                    className={`${
                        currentGenre === genre.genre
                            ? 'border-2 border-primary-purple bg-slate-100'
                            : 'bg-primary-purple text-slate-50'
                    } min-w-max rounded-lg px-2 py-1 font-bold lg:min-w-min`}
                    onClick={() => {
                        handleGenreClick(genre.genre);
                    }}
                >
                    {genre.name}
                </button>
            ))}
        </aside>
    );
};

export default StoreGameGenres;
