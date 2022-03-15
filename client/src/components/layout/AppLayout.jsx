import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNavigation from './LeftNavigation';

function AppLayout() {
  return (
    <div className='w-screen h-screen bg-gray-400 flex flex-row'>
      {/* LEFT - HORIZONTAL NAVIGATION */}
      <LeftNavigation />

      {/* RIGHT - EACH PAGE */}
      {/* bg-gradient-to-r from-cyan-500 to-blue-500 */}
      <div className='w-full bg-gradient-to-t from-[#121212] to-[#212121]'>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
