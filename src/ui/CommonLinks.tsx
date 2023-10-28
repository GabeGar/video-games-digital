import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import {
    closeOverlay,
    getOverlayState,
} from '../features/overlay/overlaySlice';

import HomeIcon from './icons/HomeIcon';
import ShoppingBagIcon from './ShoppingBagIcon';
import AboutIcon from './icons/AboutIcon';
import CareersIcon from './icons/CareersIcon';
import ContactUsIcon from './icons/ContactUsIcon';

const CommonLinks = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const isOpen = useSelector(getOverlayState);

    const handleCloseOverlay = () => {
        dispatch(closeOverlay());
    };

    return (
        <>
            <li>
                <Link
                    className="flex items-center gap-2"
                    to="/video-games-digital"
                    onClick={() => {
                        if (
                            isOpen &&
                            location.pathname === '/video-games-digital'
                        )
                            dispatch(closeOverlay());
                    }}
                >
                    {isOpen && <HomeIcon />}
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link className="flex items-center gap-2" to="store">
                    {isOpen && <ShoppingBagIcon />}
                    <span>Store</span>
                </Link>
            </li>
            <li>
                <a
                    className="flex items-center gap-2"
                    href="#/video-games-digital/About"
                    onClick={handleCloseOverlay}
                >
                    {isOpen && <AboutIcon />}
                    <span>About</span>
                </a>
            </li>
            <li>
                <a
                    className="flex items-center gap-2"
                    href="#/video-games-digital/Careers"
                    onClick={handleCloseOverlay}
                >
                    {isOpen && <CareersIcon />}
                    <span>Careers</span>
                </a>
            </li>
            <li>
                <a
                    className="flex items-center gap-2"
                    href="#/video-games-digital/Contact"
                    onClick={handleCloseOverlay}
                >
                    {isOpen && <ContactUsIcon />}
                    <span>Contact Us</span>
                </a>
            </li>
        </>
    );
};

export default CommonLinks;
