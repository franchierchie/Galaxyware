import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useProductCard } from '../../hooks';

export const ProductCard = ({ id, category, image, name, price }) => {
  const { hasItem, addToCart, handleClick } = useProductCard( id );

  const newName = useMemo(() => {
    return name.length > 20
      ? name.substring(0,20) + '...'
      : name
  }, [name]);

  return (
    <div className="product-card__wrapper">
      <Link
        className="product-card"
        to={`/product/${ id }`}
        onClick={ handleClick }
      >
        <div className="image-wrapper">
          <div className="image-header">
            {
              ( price.discount )
                && (<div className="discount-tag">-{ price?.discount * 100 }%</div>)
            }

            <button className="icon-button">
              <img src="./icons/heart.svg" alt="Add to favorites button" />
            </button>
          </div> {/* close image-header */}

          <div
            className="product-image"
            style={{
              backgroundImage: `url(${ image })`
            }}
          ></div>
        </div> {/* close image-wrapper */}

        <div className="product-info">
          <p className="name">{ newName }</p>
          <p className="category">{ category }</p>

          <div className="price" data-price={(price.discount) ? true : false}>
            <p className="current">${ Number.parseFloat(price.current).toFixed(2) }</p>
            {
              (price.discount)
                && (<p className="discount">${ (price.current / (1 - price.discount)).toFixed(2) }</p>)
            }
          </div> {/* close price */}

        </div> {/* close product-info */}

      </Link> {/* close product-card */}

      <button
        className={`button button-primary ${(hasItem) ? 'has-item' : ''}`}
        onClick={ addToCart }
      >
        {
          ( hasItem )
            ? (<>
                <img src="./icons/trash-2.svg" alt="Remove from cart" />
                <p>Remove from cart</p>
              </>)
            : (<>
                <img src="./icons/shopping-cart.svg" alt="Add to cart button" />
                <p>Add to cart</p>
              </>)
        }
      </button>
    </div>
  )
}
