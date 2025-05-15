import { useEffect, useState } from 'react';

const getWindowWidth = () => {
  return window.innerWidth;
}

export const useSideBar = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState( getWindowWidth );
  
    useEffect(() => {
      const handleWindowWidth = () => {
        setWindowWidth( getWindowWidth() );
  
        if ( windowWidth < 768 ) {
          setSideMenuOpen(false);
        } else {
          setSideMenuOpen(true);
        }
      }
  
      window.addEventListener('resize', handleWindowWidth);
      return () => window.removeEventListener('resize', handleWindowWidth);
    }, [window.innerWidth]);
  
    const handleClick = () => {
      setSideMenuOpen(prev => !prev);
    }
  return {
    sideMenuOpen,
    handleClick,
  }
}
