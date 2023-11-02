import { Link, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/app-hooks';
import { closeMobileMenuOverlay } from '../features/overlay/MobileModalOverlay/mobileMenuOverlaySlice';
import { APP_PATHS } from '../common/paths';

const Logo = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(
        (state) => state.mobileMenuOverlay.isMobileMenuOpen,
    );

    const handleCloseMobileMenuOverlay = () => {
        if (isOpen && location.pathname === APP_PATHS.BASE)
            dispatch(closeMobileMenuOverlay());
    };

    return (
        <Link
            className="font-semibold uppercase tracking-widest transition-transform hover:scale-105"
            to={APP_PATHS.BASE}
            onClick={handleCloseMobileMenuOverlay}
        >
            <div className="flex flex-col items-center rounded border-2 border-primary-purple p-2 text-xl text-primary-purple">
                <span>Video Games</span>
                <p className="text-[2.4rem]">Digital</p>
            </div>
        </Link>
    );
};

export default Logo;
