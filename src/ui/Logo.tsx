import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
    closeMobileMenuOverlay,
    getMobileMenuOverlayState,
} from '../features/overlay/mobileMenuOverlaySlice';
import { APP_PATHS } from '../common/paths';

const Logo = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const isOpen = useSelector(getMobileMenuOverlayState);

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
