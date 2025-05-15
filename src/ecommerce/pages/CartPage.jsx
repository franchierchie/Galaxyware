import { CartItem } from '../components';
import { useCartPage } from '../../hooks';

const shippingPrice = 50;

export const CartPage = () => {
  const {
    cart,
    isLoading,
    totalPrice,
    isOpen,
    handleClick,
    hanldleCheckoutClick,
  } = useCartPage( shippingPrice );

  return (
    <div className="wrapper cart-page">
      <div className="product-display">
        {
          ( !isLoading ) && cart.map((item) => (
            <CartItem
              key={ item.id }
              { ...item }
            />
          ))
        }

        {
          ( cart.length < 1 )
            && (
              <div className="empty-cart">
                <img src="./icons/shopping-cart.svg" alt="cart icon" />
      
                <div className="empty-cart__info">
                  <h3>Your cart is empty</h3>
                  <p>Let’s discover what’s waiting for you.</p>
                </div>
              </div> // close empty-cart
            )
        }
      </div> {/* close product-display */}

      <div className="cart-detail">
        <div className="info">
          <h3>Summary</h3>

          <div className="detail-row__wrapper">
            <div className="detail-row">
              <p>Order value</p>
              <p>${ totalPrice.toFixed(2) }</p>
            </div> {/* close detail-row */}

            <div className="detail-row">
              <p>Shipping</p>
              <p>${ shippingPrice.toFixed(2) }</p>
            </div> {/* close detail-row */}

            <hr />

            <div className="detail-row">
              <p>Total</p>
              <p>${ (totalPrice + shippingPrice).toFixed(2) }</p>
            </div> {/* close detail-row */}
          </div> {/* close detail-row__wrapper */}
        </div> {/* close info */}

        <div className="demo-info-card" data-open={ isOpen }>
          <header>
            <img className="alert-icon" src="./icons/circle-alert.svg" alt="Alert icon" />

            <button onClick={ handleClick }>
              <img src="./icons/x.svg" alt="Close modal" />
            </button>
          </header>
          <p className="demo-info-card__title">This is a demo. Transactions won’t be processed</p>
          <p>Explore the features, but note that no real transactions will go through.</p>
        </div>{/* close demo-info-card */}

        <button
          // className="checkout-button"
          className="button button-primary"
          onClick={ hanldleCheckoutClick }
        >
            Proceed to Checkout
          </button>
      </div> {/* close cart-detail */}
    </div> // wrapper
  )
}
