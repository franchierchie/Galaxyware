import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setFilters } from '../../store';
import { localStorageManagement } from '../../helpers';
import { localStorageNameValues } from '../data';

export const CategoryCard = ({ categoryName, categoryIcon }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorageManagement( localStorageNameValues.galaxyware__route, '/explore' );
    localStorageManagement( localStorageNameValues.galaxyware__filters, [ categoryName.toLowerCase() ] );

    dispatch( setFilters([ categoryName.toLowerCase() ]));
  }

  return (
    <Link
      className="category-card"
      to="/explore"
      onClick={ handleClick }
    >
      <div className="img-wrapper">
        <img src={ categoryIcon } alt={`${ categoryName } category icon`} />
      </div>
      <p className="category-name">{ categoryName }</p>
    </Link>
  )
}
