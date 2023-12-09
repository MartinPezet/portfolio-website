import React from 'react';
import { createRoot } from 'react-dom/client';
import UserProvider from './context/UserProvider'

import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <UserProvider>
        <App />
    </UserProvider>
);

