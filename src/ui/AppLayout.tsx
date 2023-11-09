import { AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

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
            <AnimatePresence>
                {isSearchMenuOpen && (
                    <SearchModalOverlay key="search-overlay" />
                )}
                {isMobileMenuOpen && (
                    <MobileModalOverlay key="mobile-overlay" />
                )}
            </AnimatePresence>

            <Toaster
                position="top-center"
                gutter={8}
                toastOptions={{
                    className: 'bg-primary-purple text-slate-100 font-semibold',
                    duration: 2000,
                }}
            />

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
