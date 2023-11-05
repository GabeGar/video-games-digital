import StoreGames from '../features/store/StoreGames';
import StoreGameGenres from '../features/store/StoreGameGenres';

const StoreLayout = () => {
    return (
        <div className="grid p-3 lg:grid-cols-storeLayoutGrid lg:px-9">
            <StoreGameGenres />
            <StoreGames />
        </div>
    );
};

export default StoreLayout;
