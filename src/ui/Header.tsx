import { Link, useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { openMobileMenuOverlay } from '../features/overlay/MobileModalOverlay/mobileMenuOverlaySlice';

import { APP_PATHS } from '../common/paths';

import Logo from './Logo';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import HamburgerMenuIcon from './HamburgerMenuIcon';
import CommonLinks from './CommonLinks';
import SearchMenuFormButton from '../features/overlay/SearchMenuOverlay/SearchMenuFormButton';
import { getSearchMenuOverlayState } from '../features/overlay/SearchMenuOverlay/searchMenuOverlaySlice';

const Header = () => {
    const dispatch = useDispatch();
    const isOnBaseURL = useMatch(APP_PATHS.BASE);
    const isSearchMenuOpen = useSelector(getSearchMenuOverlayState);

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
                            className="group ml-1 mr-2 transition-all hover:scale-110"
                            to={APP_PATHS.CART}
                        >
                            <ShoppingCartIcon />
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
