import { createPortal } from 'react-dom';

import Overlay from '../Overlay';
import SearchMenuFormButton from './SearchMenuFormButton';

const SearchModal = () => {
    return (
        <Overlay>
            <SearchMenuFormButton />
        </Overlay>
    );
};

const SearchModalOverlay = () => {
    const overlayRoot = document.querySelector('#overlay--root');

    if (overlayRoot) {
        return createPortal(<SearchModal />, overlayRoot);
    }
};

export default SearchModalOverlay;
