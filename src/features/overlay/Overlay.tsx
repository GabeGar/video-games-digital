import { useEffect } from 'react';

import {
    closeMobileMenuOverlay,
    getMobileMenuOverlayState,
} from './MobileModalOverlay/mobileMenuOverlaySlice';
import { getSearchMenuOverlayState } from './SearchMenuOverlay/searchMenuOverlaySlice';
import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks';

interface OverlayProps {
    children: React.ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
    const dispatch = useAppDispatch();
    const isMobileMenuOpen = useAppSelector(getMobileMenuOverlayState);
    const isSearchMenuOpen = useAppSelector(getSearchMenuOverlayState);

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
