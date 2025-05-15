import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getItemByName } from '../../helpers';

export const OptionButton = ({ options }) => {
  const { products } = useSelector((state) => state.ecommerce);
  const navigate = useNavigate();

  const handleClick = ( optionName ) => {
    const productsArray = getItemByName( products, optionName );
    navigate(`/product/${productsArray[0].id}`);
  }
  
  return (
    <>
      {
        ( options?.length > 1 )
          && (
            <div className="product-page__section">
              <h3>Options</h3>

              <div className="options-wrapper">
                {
                  options.map(optionName => (
                    <button
                      key={ optionName }
                      onClick={() => handleClick( optionName )}
                    >
                      { optionName }
                    </button>
                  ))
                }
              </div> {/* close options-wrapper */}
            </div> // close product-page__section
          )
      }
    </>
  )
}
