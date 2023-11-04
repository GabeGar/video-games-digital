import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { APP_PATHS } from '../../common/paths';
import { useAppDispatch, useAppSelector } from '../../hooks/app-hooks';
import { fetchGameBySlug } from '../../services/apiRawg';
import Loader from '../../ui/Loader';
import githubIcon from '../../assets/github-mark-white.svg';

const StoreGameItem = () => {
    const { game_slug } = useParams();
    const { status, error, game } = useAppSelector((state) => state.store);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (game_slug) {
            void (async () => {
                await dispatch(fetchGameBySlug(game_slug));
            })();
        }
    }, [game_slug, dispatch]);

    if (status === 'loading') return <Loader />;
    if (status === 'fail') return <p>{error}</p>;

    const gameName = game?.name ? game.name : 'Unknown';

    const backgroundImage = game?.background_image ? game.background_image : '';

    const backgroundImageAlt = game?.name
        ? `${game.name} image banner`
        : 'Unknown';

    const gamePrice = game?.price ? `$${game.price}` : 'Unknown';

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const esrbRating = game?.esrb_rating?.name
        ? game.esrb_rating.name
        : 'Unknown';

    const description = game?.description_raw
        ? game.description_raw
        : 'Unknown';

    const released = game?.released ? game.released : 'Unknown';

    const genresText =
        game?.genres && game.genres.length > 0
            ? game.genres.map((genre) => genre.name).join(', ')
            : 'Unknown';

    const platformsText =
        game?.parent_platforms && game.parent_platforms.length > 0
            ? game.parent_platforms
                  .map(({ platform }) => platform.name)
                  .join(', ')
            : 'Unknown';

    const developersText =
        game?.developers && game.developers.length > 0
            ? game.developers.map((developer) => developer.name).join(', ')
            : 'Unknown';

    const publishersText =
        game?.publishers && game.publishers.length > 0
            ? game.publishers.map((publisher) => publisher.name).join(', ')
            : 'Unknown';

    return (
        <div className="md:grid-cols-storeItemGrid grid-rows-1 px-3 pt-2 md:grid md:min-h-[80dvh]">
            <section className="flex items-center justify-between text-primary-purple md:hidden">
                <Link className="text-lg font-semibold" to={APP_PATHS.STORE}>
                    🔙 Go Back
                </Link>
                <h1 className="text-center text-2xl font-bold">{gameName}</h1>
            </section>
            <section>
                <img
                    className="h-full object-cover"
                    src={backgroundImage}
                    alt={backgroundImageAlt}
                />
            </section>
            <div className="md:px-7">
                <section className="hidden items-center justify-between text-primary-purple md:flex">
                    <Link
                        className="text-lg font-semibold"
                        to={APP_PATHS.STORE}
                    >
                        🔙 Go Back
                    </Link>
                    <h1 className="text-center text-2xl font-bold">
                        {gameName}
                    </h1>
                </section>
                <section>
                    <button className="mt-2 flex w-full justify-between rounded-md bg-primary-purple p-3 text-lg font-bold text-slate-100">
                        <span>Add to Cart</span>
                        <span className="text-lg">{gamePrice}</span>
                    </button>
                </section>
                <section className="font mt-2 max-w-max rounded-md border-2 border-primary-purple bg-primary-purple px-2 font-semibold tracking-wide text-slate-100">
                    <p>
                        ESRB Rating:{' '}
                        <span className="font-bold">{esrbRating}</span>
                    </p>
                </section>
                <section className="my-2 h-[15rem] overflow-y-auto text-primary-purple md:h-[50dvh]">
                    <h2 className="max-w-max rounded-md bg-primary-purple px-3 py-2 font-bold uppercase text-slate-100">
                        description
                    </h2>
                    <p className="font-semibold tracking-wide md:text-lg lg:text-xl">
                        {description}
                    </p>
                </section>
                <section className="text-primary-purple">
                    <h2 className="max-w-max rounded-md bg-primary-purple px-3 py-2 font-bold uppercase text-slate-100">
                        Additional Information
                    </h2>
                    <p>
                        <span className="font-bold">Released:</span>{' '}
                        <span>{released}</span>
                    </p>
                    <p>
                        <span className="font-bold">Genres:</span>{' '}
                        <span>{genresText}</span>
                    </p>
                    <p>
                        <span className="font-bold">Platforms:</span>{' '}
                        <span>{platformsText}</span>
                    </p>
                    <p>
                        <span className="font-bold">Developers:</span>{' '}
                        <span>{developersText}</span>
                    </p>
                    <p>
                        <span className="font-bold">Publishers:</span>{' '}
                        <span>{publishersText}</span>
                    </p>
                </section>
            </div>
            <section className="mt-3 font-bold text-primary-purple md:flex md:flex-col md:items-center ">
                <Link
                    className="flex justify-center gap-2"
                    to="https://rawg.io/apidocs"
                >
                    <span>Built with</span>
                    <span>➡</span>
                    <span>RAWG API</span>
                </Link>
                <Link
                    className="flex justify-center gap-2"
                    to="https://github.com/GabeGar"
                >
                    <span>Made by</span>
                    <span>
                        <img
                            className="h-[20px] w-[20px] brightness-0"
                            src={githubIcon}
                            alt="Github Icon"
                        />
                    </span>
                    <span>Gabriel Garcia</span>
                </Link>
            </section>
        </div>
    );
};

export default StoreGameItem;
