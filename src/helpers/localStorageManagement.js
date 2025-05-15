import { localStorageNameValues } from '../ecommerce';

export const localStorageManagement = ( nameValue, setItemValue = null ) => {
  switch (nameValue) {
    case localStorageNameValues.galaxyware__route:
      if ( setItemValue ) {
        localStorage.setItem('Galaxyware__route', setItemValue);
        return;
      }
      return localStorage.getItem('Galaxyware__route') || '/';

    case localStorageNameValues.galaxyware__products:
      if ( setItemValue ) {
        localStorage.setItem('Galaxyware__products', JSON.stringify( setItemValue ));
        return;
      }
      return JSON.parse( localStorage.getItem('Galaxyware__products') ) || [];

    case localStorageNameValues.galaxyware__cart:
      if ( setItemValue ) {
        localStorage.setItem('Galaxyware__cart', JSON.stringify( setItemValue ));
        return;
      }
      return JSON.parse( localStorage.getItem('Galaxyware__cart') ) || [];

    case localStorageNameValues.galaxyware__filters:
      if ( setItemValue ) {
        localStorage.setItem('Galaxyware__filters', JSON.stringify( setItemValue ));
        return;
      }
      return JSON.parse( localStorage.getItem('Galaxyware__filters') ) || [];
  
    default:
      return 'No value was found with that name.';
  }
}
