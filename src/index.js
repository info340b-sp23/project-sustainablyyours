import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {App} from './App';
import './App.css';

import SHOP_ITEMS from './data/shop-items.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App items={SHOP_ITEMS} />
  </React.StrictMode>
  </BrowserRouter>
);