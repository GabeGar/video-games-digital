import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { APP_PATHS } from './common/paths';

import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Store from './features/store/Store';

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
                    element: <Store />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
