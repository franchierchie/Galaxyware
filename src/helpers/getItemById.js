import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const getItemById = ( id = '' ) => {
  const { products } = useSelector((state) => state.ecommerce);

  if ( id.length > 1 ) {
    const product = products.filter(prod => prod.id === id);

    return {
      product: product[0],
    }

  } else {
    const { pathname } = useLocation();
    const pathArray = pathname.split('/').filter(Boolean);
    const productId = pathArray[1];
    const product = products.filter(prod => prod.id === productId);

    return {
      product: product[0],
    }
  }
}
