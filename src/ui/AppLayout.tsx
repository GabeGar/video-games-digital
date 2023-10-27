import { Outlet } from 'react-router-dom';

import Header from './Header';

const AppLayout = () => {
    return (
        <div className="min-h-[100dvh] bg-slate-100">
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
