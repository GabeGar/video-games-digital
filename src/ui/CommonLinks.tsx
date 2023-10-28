import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getOverlayState } from '../features/overlay/overlaySlice';

import HomeIcon from './icons/HomeIcon';
import ShoppingBagIcon from './ShoppingBagIcon';
import AboutIcon from './icons/AboutIcon';
import CareersIcon from './icons/CareersIcon';
import ContactUsIcon from './icons/ContactUsIcon';

const CommonLinks = () => {
    const isOpen = useSelector(getOverlayState);

    return (
        <>
            <li>
                <Link
                    className="flex items-center gap-2"
                    to="/video-games-digital"
                >
                    {isOpen && <HomeIcon />}
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link className="flex items-center gap-2" to="/store">
                    {isOpen && <ShoppingBagIcon />}
                    <span>Store</span>
                </Link>
            </li>
            <li>
                <a
                    className="flex items-center gap-2"
                    href="#/video-games-digital/About"
                >
                    {isOpen && <AboutIcon />}
                    <span>About</span>
                </a>
            </li>
            <li>
                <a
                    className="flex items-center gap-2"
                    href="#/video-games-digital/Careers"
                >
                    {isOpen && <CareersIcon />}
                    <span>Careers</span>
                </a>
            </li>
            <li>
                <a
                    className="flex items-center gap-2"
                    href="#/video-games-digital/Contact"
                >
                    {isOpen && <ContactUsIcon />}
                    <span>Contact Us</span>
                </a>
            </li>
        </>
    );
};

export default CommonLinks;
