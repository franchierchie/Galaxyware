import { useDispatch, useSelector } from 'react-redux';

import { localStorageManagement } from '../helpers';
import { localStorageNameValues } from '../ecommerce';
import { setToCart } from '../store';

export const useProductCard = ( id ) => {
  const { cart, products } = useSelector((state) => state.ecommerce);
  const dispatch = useDispatch();
  const hasItem = cart.some(product => product.id === id);

  const handleClick = () => {
    localStorageManagement( localStorageNameValues.galaxyware__route, `/product/${ id }` );
  }

  const addToCart = () => {
    if ( hasItem ) {
      const newCart = cart.filter(cartProd => cartProd.id !== id );
      dispatch( setToCart( newCart ) );
      localStorageManagement( localStorageNameValues.galaxyware__cart, newCart );
      return;
    }

    const product = products.filter(prod => prod.id === id);
    const newItem = {
      ...product[0],
      amount: 1,
    }
    dispatch( setToCart([ ...cart, newItem ]) );
    localStorageManagement( localStorageNameValues.galaxyware__cart, [ ...cart, product[0] ] );
  }

  return {
    hasItem,
    
    handleClick,
    addToCart,
  }
}
