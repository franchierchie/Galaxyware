import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { navigationOptions } from '../data';
import { startLogOut } from '../../store';

export const NavigationBar = () => {
  const { cart } = useSelector((state) => state.ecommerce)
  const [navOption, setNavOption] = useState('Home');
  const dispatch = useDispatch();

  const handleClick = ( goTo = navigationOptions[0].name ) => {
    if ( goTo === 'Log out') {
      dispatch( startLogOut() );
      return;
    }

    setNavOption( goTo );
  }

  return (
    <nav className="navigation-bar">
      {
        navigationOptions.map(option => (
          <button
            key={ option.name }
            href="#"
            className={`icon-button ${(navOption === option.name) ? 'active' : ''}`}
            onClick={() => handleClick(option.name)}
          >
            {
              ( option.name === 'Cart' && cart.length > 0 ) && (
                <div className="cart-items">{ cart.length }</div>
              )
            }
            <img
              src={ option.icon }
              alt={ option.alt }
              className={`${ option.name === 'Log out' ? 'log-out' : ''}`}
            />
            <p>{ option.name }</p>
          </button>
        ))
      }
    </nav>
  )
}
