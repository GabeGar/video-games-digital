import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getOverlayState } from './overlaySlice';

interface OverlayProps {
    children: React.ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
    const isOpen = useSelector(getOverlayState);

    useEffect(() => {
        const html = document.querySelector('html') as HTMLElement;

        html.style.overflow = isOpen ? 'hidden' : '';

        return () => {
            html.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div className="absolute z-10 min-h-screen min-w-full bg-primary-purple/30 backdrop-blur-[2px]">
            {children}
        </div>
    );
};

export default Overlay;
