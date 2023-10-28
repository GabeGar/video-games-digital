import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getOverlayState } from '../features/overlay/overlaySlice';
import { APP_PATHS } from '../common/paths';

import Header from './Header';
import Footer from './Footer';
import MobileModalOverlay from '../features/overlay/MobileModalOverlay';

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

            {location.pathname === APP_PATHS.BASE && <Footer />}
        </div>
    );
};

export default AppLayout;
