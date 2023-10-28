import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    closeMobileMenuOverlay,
    getMobileMenuOverlayState,
} from './mobileMenuOverlaySlice';

interface OverlayProps {
    children: React.ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
    const dispatch = useDispatch();
    const isOpen = useSelector(getMobileMenuOverlayState);

    useEffect(() => {
        const handleResize = () => {
            if (isOpen && window.innerWidth >= 640)
                dispatch(closeMobileMenuOverlay());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen, dispatch]);

    useEffect(() => {
        const html = document.querySelector('html') as HTMLElement;

        html.style.overflow = isOpen ? 'hidden' : '';

        return () => {
            html.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div className="absolute z-10 min-h-screen min-w-full bg-primary-purple/20 backdrop-blur-[2px]">
            {children}
        </div>
    );
};

export default Overlay;
