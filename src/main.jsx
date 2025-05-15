import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { EcommerceApp } from './ecommerceApp';
import { store } from './store';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <EcommerceApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
