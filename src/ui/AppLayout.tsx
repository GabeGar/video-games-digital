import { Outlet, useLocation } from 'react-router-dom';

import { useAppSelector } from '../hooks/app-hooks';
import { APP_PATHS } from '../common/paths';

import Header from './Header';
import Footer from './Footer';
import MobileModalOverlay from '../features/overlay/MobileModalOverlay/MobileModalOverlay';
import SearchModalOverlay from '../features/overlay/SearchMenuOverlay/SearchModalOverlay';

const AppLayout = () => {
    const location = useLocation();
    const isMobileMenuOpen = useAppSelector(
        (state) => state.mobileMenuOverlay.isMobileMenuOpen,
    );
    const isSearchMenuOpen = useAppSelector(
        (state) => state.searchMenuOverlay.isSearchMenuOpen,
    );

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
