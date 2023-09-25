import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/slices/cartSlice';
import ProductReducer from '../components/slices/productSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product : ProductReducer
  }
});