import { Link } from 'react-router-dom';

import { APP_PATHS } from '../../common/paths';
import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks';
import { GameType } from '../../types/gamesInterfaceAndType';
import { addToCart, removeFromCart } from '../cart/cartSlice';

import Loader from '../../ui/Loader';

const StoreGames = () => {
    const dispatch = useAppDispatch();
    const { status, error, games, selectedGenre } = useAppSelector(
        (state) => state.store,
    );
    const cartItems = useAppSelector((state) => state.cart.cartItems);

    const handleAddToCart = (game: GameType) => {
        dispatch(addToCart(game));
    };

    const handleRemoveFromCart = (game: GameType) => {
        dispatch(removeFromCart(game));
    };

    if (status === 'loading') return <Loader />;
    if (status === 'fail') return <p>{error}</p>;

    return (
        <section className="space-y-2">
            <h1 className="text-3xl font-bold text-primary-purple">
                {selectedGenre.toUpperCase()}
            </h1>
            <ul className="grid grid-cols-gamesGrid gap-2">
                {games.map((game) => {
                    if (!game.background_image) return;

                    const isInCart = cartItems.find(
                        (item) => item.id === game.id,
                    );

                    return (
                        <li
                            key={game.id}
                            className="flex flex-col rounded-md shadow-storeGames transition-transform hover:scale-105"
                        >
                            <Link to={`${APP_PATHS.STORE}/${game.slug}`}>
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
                                    {isInCart ? (
                                        <>
                                            <div className="flex flex-col">
                                                <div>In Cart ☑</div>
                                                <button
                                                    className="rounded-lg bg-primary-light-purple px-4 py-1 text-sm text-primary-purple"
                                                    onClick={() => {
                                                        handleRemoveFromCart(
                                                            game,
                                                        );
                                                    }}
                                                >
                                                    Remove from Cart
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <button
                                            className="rounded-lg bg-primary-light-purple px-4 py-1 text-sm text-primary-purple"
                                            onClick={() => {
                                                handleAddToCart(game);
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                    )}

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

export default StoreGames;
