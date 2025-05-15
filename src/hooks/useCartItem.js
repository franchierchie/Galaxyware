import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { localStorageManagement } from '../helpers';
import { localStorageNameValues } from '../ecommerce';
import { setToCart } from '../store';

export const useCartItem = ( id, amount ) => {
  const [counter, setCounter] = useState( amount );
  const { cart } = useSelector((state) => state.ecommerce);
  const dispatch = useDispatch();

  const add = () => {
    setCounter(prev => prev + 1);
    const product = cart.filter(prod => prod.id === id);
    const newProduct = { ...product[0], amount: counter + 1 }
    const newCart = cart.map(cartProd => {
      if ( cartProd.id === newProduct.id ) {
        return newProduct;
      }
      return cartProd;
    });
    
    localStorageManagement( localStorageNameValues.galaxyware__cart, newCart );
    dispatch( setToCart( newCart ) );
  }
  
  const subtract = () => {
    if ( counter > 1 ) {
      setCounter(prev => prev - 1);
      const product = cart.filter(prod => prod.id === id);
      const newProduct = { ...product[0], amount: counter - 1 }
      const newCart = cart.map(cartProd => {
        if ( cartProd.id === newProduct.id ) {
          return newProduct;
        }
        return cartProd;
      });
      
      localStorageManagement( localStorageNameValues.galaxyware__cart, newCart );
      dispatch( setToCart( newCart ) );
    }
  }

  const removeItem = () => {
    const newCart = cart.filter(cartProd => cartProd.id !== id );
    dispatch( setToCart( newCart ) );
    localStorageManagement( localStorageNameValues.galaxyware__cart, newCart );
  }
  
  return {
    counter,

    add, subtract,
    removeItem,
  }
}
