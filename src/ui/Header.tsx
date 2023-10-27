import { Link } from 'react-router-dom';
import { useRef } from 'react';

import Logo from './Logo';
import ShoppingCartIcon from './ShoppingCartIcon';
import HamburgerMenuIcon from './HamburgerMenuIcon';
import SearchIcon from './SearchIcon';

const Header = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    // TODO 1: Fetch queried games, while user types characters in search field.

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!inputRef.current?.value) return;

        console.log(inputRef.current.value);
    };

    return (
        <header className="bg-slate-300 px-3 md:px-9">
            <div className="flex items-center sm:justify-between">
                <Logo />
                <form
                    className="group relative ml-auto sm:ml-0"
                    onSubmit={handleSubmit}
                >
                    <button
                        className="flex sm:absolute sm:left-2 sm:top-[.6rem]"
                        onClick={() => {
                            if (inputRef.current) {
                                inputRef.current.focus();
                            }
                            // TODO 2: Test characters no less than 2 or 3, to prevent excess api hits.)
                            if (
                                inputRef.current &&
                                inputRef.current.value.length >= 2
                            ) {
                                handleSubmit;
                            }
                        }}
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

                <div className="flex">
                    <nav className="mr-3 hidden text-xl font-medium text-primary-purple sm:block md:mr-6">
                        <ul className="flex gap-3 md:gap-6">
                            <li>
                                <Link to="/video-games-digital">Home</Link>
                            </li>
                            <li>
                                <Link to="store">Store</Link>
                            </li>
                        </ul>
                    </nav>

                    <Link
                        className="group ml-1 mr-2 transition-all hover:scale-110"
                        to="cart"
                    >
                        <ShoppingCartIcon />
                    </Link>

                    <button className="sm:hidden">
                        <HamburgerMenuIcon />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
