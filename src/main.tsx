import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>,
);
