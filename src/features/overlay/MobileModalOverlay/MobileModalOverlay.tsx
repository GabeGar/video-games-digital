import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { closeMobileMenuOverlay } from './mobileMenuOverlaySlice';

import Overlay from '../Overlay';
import close from '../../../assets/icon-close.svg';
import Logo from '../../../ui/Logo';

import CommonLinks from '../../../ui/CommonLinks';

const MobileModal = () => {
    const dispatch = useDispatch();

    const handleCloseMobileMenuOverlay = () => {
        dispatch(closeMobileMenuOverlay());
    };

    return (
        <Overlay>
            <div className="flex min-h-min flex-1 flex-col bg-slate-100 px-4 py-6 uppercase">
                <div className="flex justify-between pb-6">
                    <Logo />
                    <button onClick={handleCloseMobileMenuOverlay}>
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
            </div>
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
