import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const AppLayout = () => {
    return (
        <div className="min-h-[100dvh] bg-slate-100">
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default AppLayout;
