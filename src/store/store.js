import { configureStore } from '@reduxjs/toolkit';
import { ecommerceSlice } from './ecommerce';
import { authSlice } from './auth';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ecommerce: ecommerceSlice.reducer,
  },
});