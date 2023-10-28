import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import MobileModalOverlay from '../features/overlay/MobileModalOverlay';
import { useSelector } from 'react-redux';
import { getOverlayState } from '../features/overlay/overlaySlice';

const AppLayout = () => {
    const location = useLocation();
    const isOpen = useSelector(getOverlayState);

    return (
        <div className="min-h-[100dvh] bg-slate-100">
            {isOpen && <MobileModalOverlay />}

            <Header />

            <main>
                <Outlet />
            </main>

            {location.pathname === '/video-games-digital' && <Footer />}
        </div>
    );
};

export default AppLayout;
