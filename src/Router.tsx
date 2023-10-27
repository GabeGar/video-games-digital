import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './ui/Home';

const Router = (): React.ReactElement => {
    const router = createBrowserRouter([
        {
            path: '/video-games-digital',
            element: <AppLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
