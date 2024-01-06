import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {App} from './components';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
