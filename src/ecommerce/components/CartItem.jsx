import { useMemo } from 'react';

import { useCartItem } from '../../hooks';

export const CartItem = ({ id , name = '', category = '', image = '', price = {}, amount = 1 }) => {
  const { counter, add, subtract, removeItem } = useCartItem( id, amount );

  const newName = useMemo(() => {
    return name.length > 60
      ? name.substring(0,60) + '...'
      : name
  }, [name]);

  return (
    <div className="product-display__card">
      <div className="image-wrapper">
        <div
          className="product-image"
          style={{
            backgroundImage: `url(${ image })`
          }}
        ></div> {/* close product-image */}
      </div> {/* close image-wrapper */}

      <div className="info">
        <p className="product-display__name">
          { newName }
        </p>
        <p className="category">{ category }</p>

        <div className="price" data-price={(price.discount) ? true : false}>
          <p className="current">${ price.current.toFixed(2) }</p>
          {
            (price.discount)
              && (<p className="discount">${ (price.current / (1 - price.discount)).toFixed(2) }</p>)
          }
        </div> {/* close price */}

        <div className="functionalities">
          <div className="product-counter">
            <button onClick={ add }>
              <img src="./icons/plus.svg" alt={`Add one more ${ name } to the cart`} />
            </button>
            <p>{ counter }</p>
            <button onClick={ subtract }>
              <img src="./icons/minus.svg" alt={`Remove one ${ name } from the cart`} />
            </button>
          </div> {/* close product-counter */}

          <button
            onClick={ removeItem }
            className="trash-button"
          >
            <img src="./icons/trash-2.svg" alt="Delete from cart" />
          </button>
        </div> {/* close functionalities */}
      </div> {/* close info */}
    </div> // close product-display
  )
}
