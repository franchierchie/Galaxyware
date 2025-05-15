import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { localStorageManagement } from '../helpers';
import { localStorageNameValues } from '../ecommerce';
import { filterProducts, setFilters, setProducts } from '../store';

export const useCategoryButton = () => {
  const [inputState, setInputState] = useState({});
  const { filters } = useSelector((state) => state.ecommerce);
  const dispatch = useDispatch();

  const productsArray = localStorageManagement( localStorageNameValues.galaxyware__products );

  const addFilter = ( filterName, filterValue ) => {
    const fixedFilterName = filterName.toLowerCase();
    const hasFilter = filters?.includes( fixedFilterName );
    let payload;

    setInputState(prev => ({
      ...prev,
      // [filter value]: true/false
      [filterValue]: !prev[filterValue]
    }));

    if ( hasFilter ) {
      payload = [ ...filters, fixedFilterName ].filter(filter => filter !== fixedFilterName);
      localStorageManagement( localStorageNameValues.galaxyware__filters, payload );

    } else {
      payload = [ ...filters, fixedFilterName ];
      localStorageManagement( localStorageNameValues.galaxyware__filters, payload );
    }

    dispatch( filterProducts({
      filtersArray: payload,
      productsArray,
    }) );
  }

  const showAllButton = () => {
    setInputState({});
    dispatch( setFilters([]) );
    localStorageManagement( localStorageNameValues.galaxyware__filters, [] );
  }

  useEffect(() => {
    if ( filters.length === 0 ) {
      dispatch( setProducts( productsArray ) );
      return;
    }

    filters.forEach(filter => {
      setInputState(prev => ({
        ...prev,
        [filter]: true,
      }));
    });

    // setTimeOut to put the callback at the end fo the event queue
    setTimeout(() => {
      dispatch(filterProducts({
        filtersArray: filters,
        productsArray,
      }));
    }, 0);

  }, [filters]);

  return {
    inputState,

    addFilter,
    showAllButton,
  }
}
