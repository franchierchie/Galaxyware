import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';
import { EcommerceApp } from './EcommerceApp';

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
