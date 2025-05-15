import { Link } from 'react-router-dom';
import { localStorageManagement } from '../../helpers';
import { localStorageNameValues } from '../data';

export const Section = ({ title, cssClass = '', cssWrapperClass = true, children }) => {

  const handleClick = () => {
    localStorageManagement( localStorageNameValues.galaxyware__route, '/explore' );
  }

  return (
    <section>
      <div className="section-header">
        <h2>{ String(title).charAt(0).toUpperCase() + String(title).slice(1) }</h2>
        <Link
          className="button button-primary"
          to="/explore"
          onClick={ handleClick }
        >
          <p>See all</p>
          <img src="./icons/arrow-up-right.svg" alt="arrow pointing to the upper left corner" />
        </Link>
      </div>

      <div className={`section-content ${(cssWrapperClass) ? 'wrapper' : '' } ${ cssClass }`}>
        { children }
      </div>
    </section>
  )
}
