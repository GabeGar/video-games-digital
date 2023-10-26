import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './ui/AppLayout';

const Router = (): React.ReactElement => {
    const router = createBrowserRouter([
        {
            path: '/video-games-digital',
            element: <AppLayout />,
            children: [],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
