import { useState, useCallback, useEffect } from 'react';
import SpotifyLogo from './SpotifyLogo';
import MainMenu from './MainMenu';
import ResizeBar from '../resizeBar/ResizeBar';

function LeftNavigation() {
  const [menuSize, setMenuSize] = useState(
    localStorage.getItem('menuSize') || 210
  );

  useEffect(() => {
    // localStorage.setItem('menuSize', JSON.stringify(menuSize));
  }, [menuSize]);

  const handleSizeChange = useCallback((newSize: number) => {
    setMenuSize(newSize);
  }, []);

  const sizeStyles = {
    maxWidth: `${menuSize}px`,
  };

  return (
    <>
      <div className='w-full min-w-[172px] bg-black p-6' style={sizeStyles}>
        <div className='mb-9'>
          <SpotifyLogo />
        </div>
        <MainMenu />
      </div>
      <ResizeBar onSizeChange={handleSizeChange} />
    </>
  );
}

export default LeftNavigation;
