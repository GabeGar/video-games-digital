import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks';
import { APP_PATHS } from '../../common/paths';
import { formatCurrency } from '../../utils/formatCurrency';
import { clearCart, removeFromCart } from './cartSlice';
import { GameType } from '../../types/gamesInterfaceAndType';

const Cart = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    const hasItems = cartItems.length > 0;
    const total = cartItems.reduce((acc, game) => {
        return acc + game.price;
    }, 0);
    const totalFormatted = formatCurrency(total);

    const handleCheckOut = () => {
        dispatch(clearCart());
    };

    const handleRemoveFromCart = (game: GameType) => {
        dispatch(removeFromCart(game));
    };

    return (
        <div className="px-3 pt-1 md:flex md:flex-col md:items-center">
            {hasItems && (
                <div>
                    <Link
                        to={APP_PATHS.STORE}
                        className="text-xl font-semibold text-primary-purple"
                    >
                        🔙 Continue Shopping
                    </Link>
                </div>
            )}
            {hasItems ? (
                <>
                    <section className="max-h-[70dvh] divide-y-2 divide-primary-purple overflow-y-auto md:min-w-[40rem]">
                        <ul className="flex flex-col divide-y-2 divide-primary-purple">
                            {cartItems.map((gameItem) => {
                                return (
                                    <li
                                        key={gameItem.id}
                                        className="flex items-center gap-2 py-2"
                                    >
                                        <div>
                                            <img
                                                className="h-[5rem] w-[5rem] object-cover md:h-[10rem] md:w-[10rem]"
                                                src={gameItem.background_image}
                                                alt={`${gameItem.name} image banner`}
                                            />
                                        </div>
                                        <div className="text-md flex flex-1 flex-col items-end text-primary-purple md:h-full md:gap-2">
                                            <p className="text-left font-bold md:text-xl">
                                                {gameItem.name}
                                            </p>
                                            <p className="text-xl font-medium">
                                                ${gameItem.price}
                                            </p>
                                            <div>
                                                <button
                                                    className="rounded-md bg-primary-purple px-2 py-1 font-semibold text-slate-100"
                                                    onClick={() => {
                                                        handleRemoveFromCart(
                                                            gameItem,
                                                        );
                                                    }}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                    <div className="flex items-center justify-between py-6 text-2xl text-primary-purple md:min-w-[40rem]">
                        <button
                            className="rounded-md bg-primary-purple px-2 py-1 font-bold text-slate-100 transition-transform hover:scale-105"
                            onClick={handleCheckOut}
                        >
                            Checkout
                        </button>
                        <p className="space-x-1">
                            <span className="font-medium">Sub Total:</span>
                            <span className="font-semibold">
                                {totalFormatted}
                            </span>
                        </p>
                    </div>
                </>
            ) : (
                <section>
                    <p className="flex h-[50dvh] flex-col items-center justify-center text-2xl font-medium text-primary-purple">
                        <span> 🤔 Your Cart is Empty 🤔</span>
                        <Link
                            to={APP_PATHS.STORE}
                            className="mt-2 text-2xl font-bold"
                        >
                            🔙 Continue Shopping
                        </Link>
                    </p>
                </section>
            )}
        </div>
    );
};

export default Cart;
