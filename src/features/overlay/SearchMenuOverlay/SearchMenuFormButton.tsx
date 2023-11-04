import { useEffect, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/app-hooks';
import {
    closeSearchMenuOverlay,
    openSearchMenuOverlay,
    clearSearchedGames,
    setSearchQuery,
} from './searchMenuOverlaySlice';
import { fetchGamesByQuery } from '../../../services/apiRawg';

import SearchIcon from '../../../ui/icons/SearchIcon';
import close from '../../../assets/icon-close.svg';
import SearchMenuGames from './SearchMenuGames';
import useEscKey from '../../../hooks/useEscKey';

const BASE_INPUT_STYLES = `h-12 rounded-lg bg-slate-100 text-center text-[calc(.75rem+1dvw)] sm:text-xl font-semibold tracking-wide text-primary-purple outline-none transition-all duration-150 placeholder:px-10 placeholder:text-primary-purple/70 focus:bg-slate-50 focus:ring-2 focus:ring-primary-purple group-hover:outline-2 group-hover:outline-offset-0 group-hover:outline-primary-purple group-hover:placeholder:text-primary-purple/70 sm:block lg:w-[35rem] xl:w-[50rem]`;

const SearchMenuFormButton = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useAppDispatch();
    const { isSearchMenuOpen, searchQuery } = useAppSelector(
        (state) => state.searchMenuOverlay,
    );

    useEffect(() => {
        // Prevent accidental firing of the fetchGamesByQuery function on mount. SearchMenu MUST have isSearchMenuOpen state be true, in order for the intended effect to trigger.
        if (!isSearchMenuOpen) return;

        // Focus on the input field when the form is rendered
        if (inputRef.current) {
            inputRef.current.focus();
        }

        // Prevent premature firing of fetch query requests and clear any game results, fetched or otherwise.
        if (searchQuery.length <= 2) {
            dispatch(clearSearchedGames());
            return;
        }

        const timer = setTimeout(() => {
            void (async () => {
                await dispatch(fetchGamesByQuery(searchQuery));
            })();
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery, dispatch, isSearchMenuOpen]);

    useEscKey(() => {
        if (isSearchMenuOpen) handleCloseSearchMenuOverlay();
    });

    const handleOpenSearchOverlayClick = () => {
        dispatch(openSearchMenuOverlay());
    };

    const handleCloseSearchMenuOverlay = () => {
        dispatch(closeSearchMenuOverlay());
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        return;
    };

    if (isSearchMenuOpen) {
        return (
            <>
                <form
                    className="group absolute left-1/2 top-24 -translate-x-1/2 transform"
                    onSubmit={handleSubmit}
                >
                    <button
                        type="submit"
                        className="absolute left-2 top-[.6rem]"
                    >
                        <SearchIcon />
                    </button>
                    <input
                        ref={inputRef}
                        className={`${BASE_INPUT_STYLES} md:w-[30rem]`}
                        type="text"
                        name="Search"
                        placeholder="Search games"
                        onChange={handleInputChange}
                    />
                    <button
                        type="button"
                        className="absolute right-0 top-[-5rem] rounded-full bg-slate-100 p-3 outline-none transition-all hover:scale-110 hover:focus:outline-2 hover:focus:outline-primary-purple hover:focus:ring-2"
                        onClick={handleCloseSearchMenuOverlay}
                    >
                        <img
                            className="h-6 w-6"
                            src={close}
                            alt="Close menu icon"
                        />
                    </button>
                </form>

                <SearchMenuGames />
            </>
        );
    }

    return (
        <button
            className="group relative ml-auto sm:ml-0"
            onClick={handleOpenSearchOverlayClick}
        >
            <div className="sm:absolute sm:left-2 sm:top-[.6rem]">
                <SearchIcon />
            </div>
            <input
                className={`${BASE_INPUT_STYLES} ${
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                    isSearchMenuOpen ? '' : 'sm:w-[15rem]'
                } hidden`}
                type="text"
                name="Search"
                placeholder="Search games"
            />
        </button>
    );
};

export default SearchMenuFormButton;
