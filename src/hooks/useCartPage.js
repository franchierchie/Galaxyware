import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearCart } from '../store';
import { localStorageManagement } from '../helpers';
import { localStorageNameValues } from '../ecommerce';

import Swal from 'sweetalert2';

export const useCartPage = ( shippingPrice ) => {
  const [isOpen, setIsOpen] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isLoading, cart } = useSelector((state) => state.ecommerce);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsOpen(false);
  }

  const hanldleCheckoutClick = () => {
    dispatch( clearCart() );
    localStorageManagement( localStorageNameValues.galaxyware__cart, [] );
    Swal.fire({
      title: "Checkout complete!",
      text: "Thank you for shopping with us.",
      icon: "success",
    });
  }

  useEffect(() => {
    const safeCart = cart.filter( p => {
      if ( p?.price?.current != null && p?.amount != null ) {
        return p;
      } else if ( typeof p?.amount != 'number' ) {
        return { ...p, amount: 1 };
      }
    });

    const newTotal = safeCart.reduce((sum, product) => {
      const discount = typeof product.price.discount === 'number' ? product.price.discount : 0;
      const priceWithDiscount = product.price.current * (1 - discount);

      return sum + priceWithDiscount * product.amount;
    }, 0);

    setTotalPrice( newTotal );
  }, [cart]);

  return {
    isOpen,
    totalPrice,
    isLoading, cart,

    handleClick,
    hanldleCheckoutClick,
  }
}
