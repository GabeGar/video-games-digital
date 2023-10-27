import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link
            className="font-semibold uppercase tracking-widest transition-transform hover:scale-105"
            to="/video-games-digital"
        >
            <div className="flex flex-col items-center rounded border-2 border-primary-purple p-2 text-xl text-primary-purple">
                <span>Video Games</span>
                <p className="text-[2.4rem]">Digital</p>
            </div>
        </Link>
    );
};

export default Logo;
