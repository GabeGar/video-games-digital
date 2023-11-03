import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks/app-hooks';
import Loader from '../../ui/Loader';

const Games = () => {
    const { status, error, games, selectedGenre } = useAppSelector(
        (state) => state.store,
    );

    if (status === 'loading') return <Loader />;
    if (status === 'fail') return <p>{error}</p>;

    return (
        <section className="space-y-2 overflow-y-scroll">
            <h1 className="text-3xl font-bold text-primary-purple">
                {selectedGenre?.toUpperCase()}
            </h1>
            <ul className="grid grid-cols-gamesGrid gap-2">
                {games.map((game) => {
                    if (!game.background_image) return;

                    return (
                        <li key={game.id} className="flex flex-col">
                            <Link to="#">
                                <img
                                    className="max-h-[250px] min-h-[250px] w-full rounded-t-md"
                                    src={game.background_image}
                                    alt={`${game.name} image banner`}
                                />
                            </Link>
                            <div className="flex flex-grow flex-col justify-between rounded-b-md border-2 border-t-0 border-primary-purple bg-primary-purple px-3 py-4 text-lg font-semibold text-slate-100">
                                <div>
                                    <h2>{game.name}</h2>
                                </div>
                                <div className="flex justify-between pt-3">
                                    <button className="rounded-lg bg-primary-light-purple px-4 py-1 text-sm text-primary-purple">
                                        Add to Cart
                                    </button>
                                    <p>${game.price}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Games;
