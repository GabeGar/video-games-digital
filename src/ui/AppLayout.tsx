import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getMobileMenuOverlayState } from '../features/overlay/MobileModalOverlay/mobileMenuOverlaySlice';
import { APP_PATHS } from '../common/paths';

import Header from './Header';
import Footer from './Footer';
import MobileModalOverlay from '../features/overlay/MobileModalOverlay/MobileModalOverlay';
import { getSearchMenuOverlayState } from '../features/overlay/SearchMenuOverlay/searchMenuOverlaySlice';
import SearchModalOverlay from '../features/overlay/SearchMenuOverlay/SearchModalOverlay';

const AppLayout = () => {
    const location = useLocation();
    const isMobileMenuOpen = useSelector(getMobileMenuOverlayState);
    const isSearchMenuOpen = useSelector(getSearchMenuOverlayState);

    return (
        <>
            {isSearchMenuOpen && <SearchModalOverlay />}
            {isMobileMenuOpen && <MobileModalOverlay />}

            <div className="min-h-[100dvh] bg-slate-100">
                <Header />

                <main>
                    <Outlet />
                </main>

                {location.pathname === APP_PATHS.BASE && <Footer />}
            </div>
        </>
    );
};

export default AppLayout;
