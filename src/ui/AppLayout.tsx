import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const AppLayout = () => {
    const location = useLocation();

    return (
        <div className="min-h-[100dvh] bg-slate-100">
            <Header />

            <main>
                <Outlet />
            </main>

            {location.pathname === '/video-games-digital' && <Footer />}
        </div>
    );
};

export default AppLayout;
