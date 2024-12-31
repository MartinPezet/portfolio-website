import React from 'react';
import { createRoot } from 'react-dom/client';
import UserProvider from './context/UserProvider'
import FontProvider from './context/FontProvider';

import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <UserProvider>
        <FontProvider>
            <App />
        </FontProvider>
    </UserProvider>
);

