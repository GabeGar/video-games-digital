import { Link, useMatch } from 'react-router-dom';

import { openMobileMenuOverlay } from '../features/overlay/MobileModalOverlay/mobileMenuOverlaySlice';
import { APP_PATHS } from '../common/paths';
import { useAppDispatch, useAppSelector } from '../hooks/app-hooks';
import Logo from './Logo';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import HamburgerMenuIcon from './icons/HamburgerMenuIcon';
import CommonLinks from './CommonLinks';
import SearchMenuFormButton from '../features/overlay/SearchMenuOverlay/SearchMenuFormButton';

const Header = () => {
    const dispatch = useAppDispatch();
    const isOnBaseURL = useMatch(APP_PATHS.BASE);
    const isSearchMenuOpen = useAppSelector(
        (state) => state.searchMenuOverlay.isSearchMenuOpen,
    );
    const hasItemsInCart = useAppSelector(
        (state) => state.cart.cartItems.length > 0,
    );

    const handleOpenMobileMenuOverlayClick = () => {
        dispatch(openMobileMenuOverlay());
    };

    return (
        <header className="bg-primary-light-purple px-3 md:px-9">
            <div className="flex items-center justify-between py-3">
                <Logo />

                {!isOnBaseURL && !isSearchMenuOpen && <SearchMenuFormButton />}

                <div className="flex">
                    <nav className="mr-3 hidden text-xl font-semibold text-primary-purple sm:block md:mr-6">
                        <ul className="flex gap-3 md:gap-6">
                            <CommonLinks />
                        </ul>
                    </nav>

                    {!isOnBaseURL && (
                        <Link
                            className="group relative ml-1 mr-2 transition-all hover:scale-110"
                            to={APP_PATHS.CART}
                        >
                            <ShoppingCartIcon />
                            {hasItemsInCart && (
                                <div className="absolute right-[-.1rem] top-0 h-2 w-2 rounded-full bg-primary-purple"></div>
                            )}
                        </Link>
                    )}

                    <button
                        onClick={handleOpenMobileMenuOverlayClick}
                        className="sm:hidden"
                    >
                        <HamburgerMenuIcon />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
