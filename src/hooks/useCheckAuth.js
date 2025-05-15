import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logOut, setFilters, setToCart, startLoadingProducts } from '../store';
import { localStorageManagement } from '../helpers';
import { localStorageNameValues } from '../ecommerce';

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const storageFilters = localStorageManagement( localStorageNameValues.galaxyware__filters );
  const storageRoute   = localStorageManagement( localStorageNameValues.galaxyware__route );
  const storageCart    = localStorageManagement( localStorageNameValues.galaxyware__cart );

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async(user) => {
      if ( !user ) return dispatch( logOut() );

      const { uid, email, displayName } = user;
      dispatch( login({ uid, email, displayName }) );
      
      dispatch( startLoadingProducts() );
      dispatch( setFilters( storageFilters ) );
      dispatch( setToCart( storageCart ) );
      navigate( storageRoute );

    });
    
  }, []);

  return {
    status,
  }
}
