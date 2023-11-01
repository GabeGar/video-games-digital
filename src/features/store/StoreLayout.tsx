import Games from './Games';
import GameGenres from './GameGenres';

const StoreLayout = () => {
    return (
        <div className="grid p-3 lg:grid-cols-storeLayoutGrid lg:px-9">
            <GameGenres />
            <Games />
        </div>
    );
};

export default StoreLayout;
