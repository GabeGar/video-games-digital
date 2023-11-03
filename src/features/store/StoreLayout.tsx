import Games from './StoreGames';
import GameGenres from './StoreGameGenres';

const StoreLayout = () => {
    return (
        <div className="grid p-3 lg:grid-cols-storeLayoutGrid lg:px-9">
            <GameGenres />
            <Games />
        </div>
    );
};

export default StoreLayout;
