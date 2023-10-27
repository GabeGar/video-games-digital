const SearchIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 50 50"
            width="30px"
            height="30px"
        >
            <path
                className="fill-primary-purple"
                d="M21,3C11.6,3,4,10.6,4,20s7.6,17,17,17s17-7.6,17-17S30.4,3,21,3z M21,33c-7.2,0-13-5.8-13-13c0-7.2,5.8-13,13-13c7.2,0,13,5.8,13,13C34,27.2,28.2,33,21,33z"
            />
            <line
                className="stroke-primary-purple"
                fill="none"
                stroke="#000000"
                strokeWidth="6"
                strokeMiterlimit="10"
                x1="31.2"
                y1="31.2"
                x2="44.5"
                y2="44.5"
            />
        </svg>
    );
};

export default SearchIcon;
