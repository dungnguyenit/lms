import React from 'react';
import { AppStoreProvider } from './providers/app-provider';
import { createRoot } from 'react-dom/client';
import Router from './routers/router';
import 'assets/scss/index.scss';
import 'antd/dist/antd.css';

const container = document.getElementById('root');

function App(): JSX.Element {

    return (
        <React.StrictMode>
            <AppStoreProvider>
                <Router />
            </AppStoreProvider>
        </React.StrictMode>
    );
}
const root = createRoot(container!);
root.render(<App />);
