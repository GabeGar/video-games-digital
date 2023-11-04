import Games from '../features/store/StoreGames';
import GameGenres from '../features/store/StoreGameGenres';

const StoreLayout = () => {
    return (
        <div className="grid p-3 lg:grid-cols-storeLayoutGrid lg:px-9">
            <GameGenres />
            <Games />
        </div>
    );
};

export default StoreLayout;
