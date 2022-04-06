import { Outlet } from 'react-router-dom';
import LeftNavigation from './leftNavegation/LeftNavigation';
import TopNavigationBar from './topNavegation/TopNavigationBar';
import Player from './player/Player';

function AppLayout() {
  return (
    <div>
      <div className='w-full h-[calc(100vh-90px)] bg-gray-400 flex flex-row'>
        <LeftNavigation />

        <main className='w-full bg-gradient-to-t from-[#121212] to-[#111111] px-8 overflow-y-scroll overflow-x-hidden custom-bar'>
          <div className='custom-resize'>
            <TopNavigationBar />
            <Outlet />
          </div>
        </main>
      </div>

      <Player />
    </div>
  );
}

export default AppLayout;
