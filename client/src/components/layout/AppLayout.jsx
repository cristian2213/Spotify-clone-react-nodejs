import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftNavigation from './LeftNavigation';
import TopNavigationBar from '../navigation/TopNavigationBar';

function AppLayout() {
  return (
    <div className='min-h-screen w-full bg-gray-400 flex flex-row'>
      {/* LEFT BAR */}
      <LeftNavigation />
      {/* RIGHT BAR */}
      <main className='w-full bg-gradient-to-t from-[#121212] to-[#212121] px-8'>
        {/* TOP BAR */}
        <TopNavigationBar />
        {/* MAIN CONTENT */}
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
