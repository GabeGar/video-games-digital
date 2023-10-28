import { Link, useMatch } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { openOverlay } from '../features/overlay/overlaySlice';

import { APP_PATHS } from '../common/paths';

import Logo from './Logo';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import HamburgerMenuIcon from './HamburgerMenuIcon';
import SearchIcon from './icons/SearchIcon';
import CommonLinks from './CommonLinks';

const Header = () => {
    const isOnBaseURL = useMatch(APP_PATHS.BASE);
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement | null>(null);

    // TODO 1: Fetch queried games, while user types characters in search field.

    const handleSearchOverlayClick = () => {
        // TODO 3: Open an overlay that allows the user to fetch a query for games they type in the form field.
    };

    const handleOpenMobileOverlayClick = () => {
        dispatch(openOverlay());
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <header className="bg-primary-light-purple px-3 md:px-9">
            <div className="flex items-center justify-between py-3">
                <Logo />

                {!isOnBaseURL && (
                    <form
                        className="group relative ml-auto sm:ml-0"
                        onSubmit={handleSubmit}
                    >
                        <button
                            className="flex sm:absolute sm:left-2 sm:top-[.6rem]"
                            onClick={handleSearchOverlayClick}
                        >
                            <SearchIcon />
                        </button>
                        <input
                            className="hidden h-12 rounded-lg bg-slate-100 text-center text-xl font-semibold tracking-wide text-primary-purple outline-none transition-all duration-150 placeholder:px-10 placeholder:text-primary-purple/70 focus:bg-slate-50 focus:ring-2 focus:ring-primary-purple
                        group-hover:outline-2 group-hover:outline-offset-0 group-hover:outline-primary-purple group-hover:placeholder:text-primary-purple/70 sm:block sm:w-[14rem] lg:w-[35rem] xl:w-[40rem]"
                            type="text"
                            name="Search"
                            placeholder="Search games"
                            ref={inputRef}
                        />
                    </form>
                )}

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
                        onClick={handleOpenMobileOverlayClick}
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
