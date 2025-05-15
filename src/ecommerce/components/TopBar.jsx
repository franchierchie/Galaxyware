import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useTopBar } from '../../hooks';

export const TopBar = () => {
  const { displayName } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.ecommerce);

  const {
    searchText,
    handleClick,
    handleSearchBar,
    onInputChange,
    onLogOut,
  } = useTopBar();

  return (
    <header>
      <Link
        className="company-logo"
        to="/"
        onClick={ handleClick }
      >
        <h1>
          <img src="/logo.svg" alt="Galaxyware store logo" />
          <p className="d-none">Galaxyware</p>
        </h1>
      </Link>

      <div className="search-bar__container">
        <form onSubmit={ handleSearchBar }>
          <label htmlFor="search-bar">
            <img src="/icons/search.svg" alt="search button" />
            <input
              id="search-bar"
              type="search"
              placeholder="What are you looking for?"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
          </label>
          <button className="d-none" type="submit"></button>
        </form>
      </div> {/* search-bar__container */}

      <div className="header-navigation">
        <Link
          to="/cart"
          className="icon-button"
        >
          {
            ( cart.length > 0 ) && (
              <div className="cart-items">{ cart.length }</div>
            )
          }
          <img src="/icons/shopping-cart.svg" alt="shopping cart icon" />
        </Link>

        <button className="icon-button user">
          <img src="/icons/user-round.svg" alt="user icon" />
          <p>{ displayName }</p>
        </button>

        <button
          onClick={ onLogOut }
          className="icon-button log-out"
        >
          <img src="/icons/log-out.svg" alt="log out icon" />
        </button>
      </div> {/* header-navigation */}
    </header>
  )
}
