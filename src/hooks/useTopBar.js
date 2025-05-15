import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useForm } from './useForm';
import { setProducts, startLogOut } from '../store';
import { getItemByName, localStorageManagement } from '../helpers';
import { localStorageNameValues } from '../ecommerce';

const formData = {
  searchText: '',
}

export const useTopBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchText, onInputChange } = useForm( formData );

  const onLogOut = () => {
    dispatch( startLogOut() );
  }

  const handleClick = () => {
    localStorageManagement( localStorageNameValues.galaxyware__route, '/' );
  }

  const handleSearchBar = ( e ) => {
    if ( e )
      e.preventDefault();

    const productsStorage = localStorageManagement( localStorageNameValues.galaxyware__products );

    if ( searchText.length < 1 ) {
      dispatch( setProducts( productsStorage ) );
      return;
    }

    const searchResults = getItemByName( productsStorage, searchText );
    dispatch( setProducts( searchResults ) );
    navigate('/explore');
  }

  useEffect(() => {
    handleSearchBar();
    
  }, [ searchText ]);

  return {
    searchText,
    
    onInputChange,
    onLogOut,
    handleClick,
    handleSearchBar,
  }
}
