import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch } from 'react-router-dom';

import {
    closeOverlay,
    getOverlayState,
} from '../features/overlay/overlaySlice';
import { APP_PATHS } from '../common/paths';

import HomeIcon from './icons/HomeIcon';
import ShoppingBagIcon from './icons/ShoppingBagIcon';
import AboutIcon from './icons/AboutIcon';
import CareersIcon from './icons/CareersIcon';
import ContactUsIcon from './icons/ContactUsIcon';

const CommonLinks = () => {
    const dispatch = useDispatch();
    const isOnBaseURL = useMatch(APP_PATHS.BASE);
    const isMobileOverlayOpen = useSelector(getOverlayState);
    const shouldRenderExtraLinks = isOnBaseURL ?? isMobileOverlayOpen;

    const handleCloseOverlay = () => {
        dispatch(closeOverlay());
    };

    return (
        <>
            <li>
                <Link
                    className="flex items-center gap-2"
                    to={APP_PATHS.BASE}
                    onClick={() => {
                        if (isMobileOverlayOpen) dispatch(closeOverlay());
                    }}
                >
                    {isMobileOverlayOpen && <HomeIcon />}
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link
                    className="flex items-center gap-2"
                    to={APP_PATHS.STORE}
                    onClick={() => {
                        if (isMobileOverlayOpen) dispatch(closeOverlay());
                    }}
                >
                    {isMobileOverlayOpen && <ShoppingBagIcon />}
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
                            {isMobileOverlayOpen && <AboutIcon />}
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center gap-2"
                            href="#/video-games-digital/Careers"
                            onClick={handleCloseOverlay}
                        >
                            {isMobileOverlayOpen && <CareersIcon />}
                            <span>Careers</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center gap-2"
                            href="#/video-games-digital/Contact"
                            onClick={handleCloseOverlay}
                        >
                            {isMobileOverlayOpen && <ContactUsIcon />}
                            <span>Contact Us</span>
                        </a>
                    </li>
                </>
            )}
        </>
    );
};

export default CommonLinks;
