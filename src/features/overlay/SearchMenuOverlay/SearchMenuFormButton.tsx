import {
    closeSearchMenuOverlay,
    openSearchMenuOverlay,
} from './searchMenuOverlaySlice';

import { useAppDispatch, useAppSelector } from '../../../hooks/app-hooks';
import SearchIcon from '../../../ui/icons/SearchIcon';
import close from '../../../assets/icon-close.svg';
import SearchMenuGames from './SearchMenuGames';

const BASE_INPUT_STYLES =
    'h-12 rounded-lg bg-slate-100 text-center text-[calc(.75rem+1dvw)] sm:text-xl font-semibold tracking-wide text-primary-purple outline-none transition-all duration-150 placeholder:px-10 placeholder:text-primary-purple/70 focus:bg-slate-50 focus:ring-2 focus:ring-primary-purple group-hover:outline-2 group-hover:outline-offset-0 group-hover:outline-primary-purple group-hover:placeholder:text-primary-purple/70 sm:block lg:w-[35rem] xl:w-[50rem] sm:w-[15rem]';

const SearchMenuFormButton = () => {
    const dispatch = useAppDispatch();
    const isSearchMenuOpen = useAppSelector(
        (state) => state.searchMenuOverlay.isSearchMenuOpen,
    );

    const handleOpenSearchOverlayClick = () => {
        dispatch(openSearchMenuOverlay());
    };

    const handleCloseSearchMenuOverlay = () => {
        dispatch(closeSearchMenuOverlay());
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    if (isSearchMenuOpen) {
        return (
            <>
                <form
                    className="group absolute left-1/2 top-32 -translate-x-1/2 transform"
                    onSubmit={handleSubmit}
                >
                    <button
                        type="submit"
                        className="absolute left-2 top-[.6rem]"
                    >
                        <SearchIcon />
                    </button>
                    <input
                        className={BASE_INPUT_STYLES}
                        type="text"
                        name="Search"
                        placeholder="Search games"
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
                className={`${BASE_INPUT_STYLES} hidden`}
                type="text"
                name="Search"
                placeholder="Search games"
            />
        </button>
    );
};

export default SearchMenuFormButton;
