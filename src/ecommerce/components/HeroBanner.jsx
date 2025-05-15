import { Link } from 'react-router-dom';

import { heroBanners, localStorageNameValues } from '../data';
import { localStorageManagement } from '../../helpers';

export const HeroBanner = () => {

  const handleClick = () => {
    localStorageManagement( localStorageNameValues.galaxyware__route, '/explore' );
  }

  return (
    <div className="banner-wrapper">
      {
        heroBanners.map(banner => (
          <div
            key={ banner.id }
            className="hero-banner"
            style={{
              backgroundImage: `url(${ banner.img })`
            }}
          >
            <p className="banner-info">{ banner.text }</p>
    
            <div className="banner-footer">
              <p>{`[ ${ banner.category } ]`}</p>
              <Link
                // className="see-all"
                className="button button-primary"
                to="/explore"
                onClick={ handleClick }
              >
                <p>See all</p>
                <img src="./icons/arrow-up-right.svg" alt="arrow pointing to the upper left corner" />
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}
