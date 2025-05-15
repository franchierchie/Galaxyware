import { loadProducts } from '../../helpers';
import { setProducts } from './ecommerceSlice';

export const startLoadingProducts = () => {
  return async ( dispatch ) => {
    const { products } = await loadProducts();

    dispatch( setProducts( products ) );
  }
}