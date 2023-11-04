import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { APP_PATHS } from './common/paths';
import StoreLayout from './ui/StoreLayout';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import StoreGameItem from './features/store/StoreGameItem';
import Cart from './features/cart/Cart';

const Router = (): React.ReactElement => {
    const router = createBrowserRouter([
        {
            path: APP_PATHS.BASE,
            element: <AppLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: APP_PATHS.STORE,
                    element: <StoreLayout />,
                },
                {
                    path: APP_PATHS.STORE_ITEM,
                    element: <StoreGameItem />,
                },
                {
                    path: APP_PATHS.CART,
                    element: <Cart />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
