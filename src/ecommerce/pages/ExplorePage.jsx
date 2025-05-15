import { useDispatch, useSelector } from 'react-redux';

import { ProductCard, SideBar } from '../components';
import { useSideBar } from '../../hooks';
import { localStorageManagement, sortItems } from '../../helpers';
import { setProducts } from '../../store';
import { localStorageNameValues } from '../data';

export const ExplorePage = () => {
  const { products, isLoading } = useSelector((state) => state.ecommerce);
  const dispatch = useDispatch();
  const { handleClick, sideMenuOpen } = useSideBar();

  const handleSorting = ( sortingValue ) => {
    const productsArray = localStorageManagement( localStorageNameValues.galaxyware__products );
    const sortedProducts = sortItems( sortingValue.target.value, productsArray );
    dispatch( setProducts( sortedProducts ) );
  }

  return (
    <>
      <SideBar
        sideMenuOpen={ sideMenuOpen }
        handleClick={ handleClick }
      />

      <div className="product-display">
        <div className="filters-wrapper">
          <select
            id="sorting"
            name="sorting"
            className="sorting-dropdown"
            onChange={ handleSorting }
          >
            <option value="default">Default</option>
            <option value="lowHigh">Price: Low to high</option>
            <option value="highLow">Price: High to low</option>
          </select>

          <button
            className="icon-button"
            onClick={ handleClick }
          >
            <img src="./icons/funnel.svg" alt="hamburger menu button" />
          </button>
        </div>

        <div className="product-display-wrapper">
          {
            ( !isLoading )
              ? products.map(prod => (
                <ProductCard
                  key={ prod.id }
                  { ...prod }
                />
              ))
              : <p>Loading...</p>
          }
        </div>
      </div>
    </>
  )
}
