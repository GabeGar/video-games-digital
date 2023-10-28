import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import { closeOverlay } from './overlaySlice';

import Overlay from './Overlay';
import close from '../../assets/icon-close.svg';
import Logo from '../../ui/Logo';

import CommonLinks from '../../ui/CommonLinks';

const MobileModal = () => {
    const dispatch = useDispatch();

    const handleCloseOverlay = () => {
        dispatch(closeOverlay());
    };
    return (
        <Overlay>
            <div className="flex min-h-min flex-1 flex-col bg-slate-100 px-4 py-6 uppercase">
                <div className="flex justify-between pb-6">
                    <Logo />
                    <button className="" onClick={handleCloseOverlay}>
                        <img
                            className="h-6 w-6 brightness-0"
                            src={close}
                            alt=""
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
    } else {
        return;
    }
};

export default MobileModalOverlay;
