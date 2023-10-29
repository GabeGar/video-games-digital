import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    closeMobileMenuOverlay,
    getMobileMenuOverlayState,
} from './MobileModalOverlay/mobileMenuOverlaySlice';
import { getSearchMenuOverlayState } from './SearchMenuOverlay/searchMenuOverlaySlice';

interface OverlayProps {
    children: React.ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
    const dispatch = useDispatch();
    const isMobileMenuOpen = useSelector(getMobileMenuOverlayState);
    const isSearchMenuOpen = useSelector(getSearchMenuOverlayState);

    useEffect(() => {
        const handleResize = () => {
            if (isMobileMenuOpen && window.innerWidth >= 640)
                dispatch(closeMobileMenuOverlay());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen, dispatch]);

    useEffect(() => {
        const html = document.querySelector('html') as HTMLElement;

        html.style.overflow =
            isMobileMenuOpen || isSearchMenuOpen ? 'hidden' : '';

        return () => {
            html.style.overflow = '';
        };
    }, [isMobileMenuOpen, isSearchMenuOpen]);

    return (
        <div className="absolute z-50 min-h-screen min-w-full bg-primary-purple/20 backdrop-blur-[2px]">
            {children}
        </div>
    );
};

export default Overlay;
