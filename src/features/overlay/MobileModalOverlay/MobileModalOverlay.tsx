import { createPortal } from 'react-dom';
import { motion as m } from 'framer-motion';

import { closeMobileMenuOverlay } from './mobileMenuOverlaySlice';
import { useAppDispatch } from '../../../hooks/app-hooks';

import Overlay from '../Overlay';
import close from '../../../assets/icon-close.svg';
import Logo from '../../../ui/Logo';

import CommonLinks from '../../../ui/CommonLinks';
import useEscKey from '../../../hooks/useEscKey';

const MobileModal = () => {
    const dispatch = useAppDispatch();

    const handleCloseMobileMenuOverlay = () => {
        dispatch(closeMobileMenuOverlay());
    };

    useEscKey(() => {
        handleCloseMobileMenuOverlay();
    });

    return (
        <Overlay>
            <m.div
                initial={{ x: 400 }}
                animate={{ x: -0 }}
                exit={{ x: 400 }}
                transition={{ type: 'spring', duration: 0.35 }}
                className="flex min-h-min flex-1 flex-col bg-slate-100 px-4 py-6 uppercase"
            >
                <div className="flex justify-between pb-6">
                    <Logo />
                    <button
                        className="self-center rounded-full bg-slate-300 p-3"
                        onClick={handleCloseMobileMenuOverlay}
                    >
                        <img
                            className="h-6 w-6"
                            src={close}
                            alt="Close menu icon"
                        />
                    </button>
                </div>
                <nav id="no-target">
                    <ul className="flex flex-col gap-3 pb-3 text-xl font-semibold text-primary-purple">
                        <CommonLinks />
                    </ul>
                </nav>
            </m.div>
        </Overlay>
    );
};

const MobileModalOverlay = () => {
    const overlayRoot = document.querySelector('#overlay--root');

    if (overlayRoot) {
        return createPortal(<MobileModal />, overlayRoot);
    }
};

export default MobileModalOverlay;
