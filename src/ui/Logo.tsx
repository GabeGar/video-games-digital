import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
    closeOverlay,
    getOverlayState,
} from '../features/overlay/overlaySlice';

const Logo = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const isOpen = useSelector(getOverlayState);

    const handleCloseOverlay = () => {
        if (isOpen && location.pathname === '/video-games-digital')
            dispatch(closeOverlay());
    };

    return (
        <Link
            className="font-semibold uppercase tracking-widest transition-transform hover:scale-105"
            to="/video-games-digital"
            onClick={handleCloseOverlay}
        >
            <div className="flex flex-col items-center rounded border-2 border-primary-purple p-2 text-xl text-primary-purple">
                <span>Video Games</span>
                <p className="text-[2.4rem]">Digital</p>
            </div>
        </Link>
    );
};

export default Logo;
