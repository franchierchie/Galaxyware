import { useDispatch, useSelector } from 'react-redux';

import { setToCart } from '../../store';
import { getItemById, localStorageManagement } from '../../helpers';
import { OptionButton, ProductPrice, ProductSpecs } from '../components';
import { localStorageNameValues } from '../data';

export const ProductPage = () => {
  const { isLoading, cart, products } = useSelector((state) => state.ecommerce);
  const dispatch = useDispatch();

  const { product } = getItemById();
  const hasItem = cart.some(prod => prod.id === product?.id);
  
  if ( isLoading ) {
    return <h1>Loading...</h1>;
  }

  const addToCart = () => {
    if ( hasItem ) {
      const newCart = cart.filter(cartProd => cartProd.id !== product.id );
      dispatch( setToCart( newCart ) );
      localStorageManagement( localStorageNameValues.galaxyware__cart, newCart );
      return;
    }

    const productFromList = products.filter(prod => prod.id === product.id);
    const newItem = {
      ...productFromList[0],
      amount: 1,
    }
    dispatch( setToCart([ ...cart, newItem ]) );
    localStorageManagement( localStorageNameValues.galaxyware__cart, [ ...cart, newItem ] );
  }

  return (
    <div className="product-page wrapper">
      <div className="image-wrapper">
        <div
          className="product-image"
          style={{
            backgroundImage: `url(${ product?.image })`
          }}
        ></div> {/* close product-image */}
      </div> {/* close image-wrapper */}

      <div className="product-page__info">
        <h1>{ product?.name }</h1>
        <a href="#" className="cateory">{ product?.category }</a>

        <OptionButton options={ product?.options } />

        <ProductPrice price={ product?.price } />

        <div className="button-wrapper">
          <button
            // className={`cta ${(hasItem) ? 'has-item' : ''}`}
            className={`button button-secondary ${(hasItem) ? 'has-item' : ''}`}
            onClick={ addToCart }
          >
          {
            ( hasItem )
              ? (<>
                  <img src="/icons/trash-2.svg" alt="Remove from cart" />
                  <p>Remove from cart</p>
                </>)
              : (<>
                  <img src="/icons/shopping-cart.svg" alt="Add to cart button" />
                  <p>Add to cart</p>
                </>)
          }
          </button>
        </div> {/* close button-wrapper */}
      </div> {/* close product-page__info */}

      <ProductSpecs specs={ product?.specs } />
    </div> // close product-page
  )
}
