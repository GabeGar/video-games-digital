import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/app-hooks';
import { fetchGames, fetchGamesByGenre } from '../../services/apiRawg';
import { sortedGenresData } from '../../common/genresData';

const Genres = () => {
    const dispatch = useAppDispatch();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();

    const handleGenreClick = (genre: string) => {
        if (genre === 'top') {
            setSearchParams('');
            void (async () => {
                await dispatch(fetchGames());
            })();
            return;
        }

        setSearchParams(`genres=${genre}`);

        void (async () => {
            await dispatch(fetchGamesByGenre(genre));
        })();
    };

    return (
        <aside className="flex max-h-[35rem] gap-2 overflow-x-scroll scroll-smooth pr-6 lg:sticky lg:top-4 lg:h-full lg:flex-col lg:overflow-y-scroll">
            <h2 className="hidden text-center text-2xl font-semibold text-primary-purple lg:block">
                Genres
            </h2>
            {sortedGenresData.map((genre) => (
                <button
                    key={genre.id}
                    className="min-w-max rounded-lg bg-primary-purple px-2 py-1 font-bold text-slate-50"
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

export default Genres;
