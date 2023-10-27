import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gamingWallpaperMobile md:bg-gamingWallpaperDesktop h-screen bg-cover bg-top bg-no-repeat px-3 py-4">
            <div className="relative flex flex-col items-center justify-center gap-3 text-4xl font-bold uppercase text-primary-purple">
                <Link
                    to="store"
                    className="bg-primary-light-purple hover:text-primary-light-purple absolute top-[calc(8rem+5dvh)] rounded-lg px-7 py-5 uppercase transition-all hover:scale-105 hover:bg-primary-purple md:top-[26dvh]"
                >
                    Shop Now
                </Link>
            </div>
        </div>
    );
};

export default Home;
