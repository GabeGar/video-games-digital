import { useEffect } from 'react';

import { useAppDispatch } from '../../hooks/app-hooks';
import { fetchGames } from '../../services/apiRawg';
import Genres from './Genres';
import Games from './Games';

const StoreLayout = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // Top-level func return promise handled with a void operator as that promise will never be used. (no-floating-promises)
        void (async () => {
            await dispatch(fetchGames());
        })();
    }, [dispatch]);

    return (
        <div className="lg:grid-cols-storeLayoutGrid grid p-3 lg:px-9">
            <Genres />
            <Games />
        </div>
    );
};

export default StoreLayout;
