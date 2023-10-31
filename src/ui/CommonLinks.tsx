import { Link, useMatch } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/app-hooks';
import {
    closeMobileMenuOverlay,
    getMobileMenuOverlayState,
} from '../features/overlay/MobileModalOverlay/mobileMenuOverlaySlice';
import { APP_PATHS } from '../common/paths';

import HomeIcon from './icons/HomeIcon';
import ShoppingBagIcon from './icons/ShoppingBagIcon';
import AboutIcon from './icons/AboutIcon';
import CareersIcon from './icons/CareersIcon';
import ContactUsIcon from './icons/ContactUsIcon';
import { fetchGames } from '../services/apiRawg';

const CommonLinks = () => {
    const dispatch = useAppDispatch();
    const isOnBaseURL = useMatch(APP_PATHS.BASE);
    const isMobileMenuOverlayOpen = useAppSelector(getMobileMenuOverlayState);
    const shouldRenderExtraLinks = isOnBaseURL ?? isMobileMenuOverlayOpen;

    const handleStoreLinkClick = () => {
        if (isMobileMenuOverlayOpen) {
            dispatch(closeMobileMenuOverlay());
        }

        void (async () => {
            await dispatch(fetchGames());
        })();
    };

    const handleCloseOverlay = () => {
        dispatch(closeMobileMenuOverlay());
    };

    return (
        <>
            <li>
                <Link
                    className="flex items-center gap-2"
                    to={APP_PATHS.BASE}
                    onClick={() => {
                        if (isMobileMenuOverlayOpen)
                            dispatch(closeMobileMenuOverlay());
                    }}
                >
                    {isMobileMenuOverlayOpen && <HomeIcon />}
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center gap-2"
                    to={APP_PATHS.STORE}
                    onClick={handleStoreLinkClick}
                >
                    {isMobileMenuOverlayOpen && <ShoppingBagIcon />}
                    <span>Store</span>
                </Link>
            </li>

            {shouldRenderExtraLinks && (
                <>
                    <li>
                        <a
                            className="flex items-center gap-2"
                            href="#/video-games-digital/About"
                            onClick={handleCloseOverlay}
                        >
                            {isMobileMenuOverlayOpen && <AboutIcon />}
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center gap-2"
                            href="#/video-games-digital/Careers"
                            onClick={handleCloseOverlay}
                        >
                            {isMobileMenuOverlayOpen && <CareersIcon />}
                            <span>Careers</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center gap-2"
                            href="#/video-games-digital/Contact"
                            onClick={handleCloseOverlay}
                        >
                            {isMobileMenuOverlayOpen && <ContactUsIcon />}
                            <span>Contact Us</span>
                        </a>
                    </li>
                </>
            )}
        </>
    );
};

export default CommonLinks;
