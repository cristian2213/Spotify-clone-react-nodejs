import React from 'react';
import NavItem from '../navigation/NavItem';
import {
  BsFillHouseDoorFill,
  BsSearch,
  BsBookHalf,
  BsFillPlusSquareFill,
  BsBookmarkHeartFill,
} from 'react-icons/bs';
import SpotifyLogo from '../navigation/Logo';

function LeftNavigation() {
  return (
    <div className='w-full max-w-[232px]  bg-black p-6'>
      {/* LOGO  */}
      <div className='mb-9'>
        <SpotifyLogo />
      </div>
      <nav>
        <ul className='flex flex-col gap-5 '>
          {/* BLOCK #1 */}
          <div className='flex flex-col gap-5 mb-7'>
            <NavItem icon={<BsFillHouseDoorFill size={24} />} name='Home' />
            <NavItem icon={<BsSearch size={24} />} name='Search' to='search' />
            <NavItem
              icon={<BsBookHalf size={24} />}
              name='Your Library'
              to='collections'
            />
          </div>
          {/* BLOCK #1 (END) */}

          {/* BLOCK #2 */}
          <div className='flex flex-col gap-5 mb-7'>
            <NavItem
              icon={<BsFillPlusSquareFill />}
              name='Create Playlist'
              to='playlist'
            />
            <NavItem
              icon={<BsBookmarkHeartFill />}
              name='Liked Songs'
              to='tracks'
            />
          </div>
          {/* BLOCK #2 (END) */}
        </ul>
      </nav>
    </div>
  );
}

export default LeftNavigation;
