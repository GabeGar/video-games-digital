import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-heroMobile md:bg-heroDesktop h-screen bg-cover bg-top bg-no-repeat px-3 py-4">
            <div className="relative flex flex-col items-center justify-center gap-3 text-4xl font-bold uppercase text-primary-purple">
                <Link
                    to="store"
                    className="absolute top-[calc(6rem+5dvh)] rounded-lg bg-primary-light-purple px-7 py-5 text-center uppercase transition-all hover:scale-105 hover:bg-primary-purple hover:text-primary-light-purple md:top-[26dvh]"
                >
                    Shop Now
                </Link>
            </div>
        </div>
    );
};

export default Home;
