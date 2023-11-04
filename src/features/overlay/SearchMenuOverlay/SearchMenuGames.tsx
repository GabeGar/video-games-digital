import { Link } from 'react-router-dom';

import { APP_PATHS } from '../../../common/paths';
import { useAppDispatch, useAppSelector } from '../../../hooks/app-hooks';
import SmallLoader from '../../../ui/SmallLoader';
import { closeSearchMenuOverlay } from './searchMenuOverlaySlice';

const SearchMenuGames = () => {
    const dispatch = useAppDispatch();

    const {
        status,
        error,
        games: searchedGames,
    } = useAppSelector((state) => state.searchMenuOverlay);

    const hasSearchedGames = searchedGames.length !== 0;

    const handleCloseSearchOverlay = () => {
        dispatch(closeSearchMenuOverlay());
    };

    if (status === 'loading') return <SmallLoader />;
    if (status === 'fail') return <p>{error}</p>;

    if (hasSearchedGames)
        return (
            <div className=" absolute left-1/2 top-40 z-50 max-h-[75dvh] w-[20rem] -translate-x-1/2 transform gap-2 overflow-y-scroll rounded-lg bg-slate-100 p-2 sm:w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[50rem]">
                <ul className="divide-y-2 divide-primary-purple text-lg font-semibold tracking-wide text-primary-purple">
                    {searchedGames.map((game) => {
                        if (!game.background_image) return;

                        return (
                            <li key={game.id} className="py-4">
                                <Link
                                    className=""
                                    to={`${APP_PATHS.STORE}/${game.slug}`}
                                    onClick={handleCloseSearchOverlay}
                                >
                                    <div className="flex flex-wrap items-center gap-2">
                                        <img
                                            className="h-[10rem] w-full rounded-lg md:w-[20rem]"
                                            src={game.background_image}
                                            alt={`${game.name} image banner`}
                                        />
                                        <div className="flex flex-1 flex-col gap-2 text-center">
                                            <span>{game.name}</span>
                                            <span className="self-center rounded-md bg-primary-purple p-2 text-slate-100">
                                                ${game.price}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
};

export default SearchMenuGames;
