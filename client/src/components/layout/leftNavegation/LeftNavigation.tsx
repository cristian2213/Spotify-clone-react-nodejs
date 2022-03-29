import React from 'react';
import SpotifyLogo from './SpotifyLogo';
import MainMenu from './MainMenu';

function LeftNavigation() {
  return (
    <div className='w-full max-w-[241px] bg-black p-6'>
      <div className='mb-9'>
        <SpotifyLogo />
      </div>
      <MainMenu />
    </div>
  );
}

export default LeftNavigation;
