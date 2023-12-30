import ReactDOM from 'react-dom/client'
import React from 'react'
import {Provider} from 'react-redux'
import {store} from './store';

import './index.css';
import {App} from './components';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
