import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
);
