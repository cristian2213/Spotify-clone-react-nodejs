import React from 'react';
import { NavLink } from 'react-router-dom';

function LeftNavigation() {
  return (
    <div className='w-full max-w-[232px]  bg-black'>
      <nav>
        <ul>
          {/* BLOCK #1 */}
          <li>
            <NavLink
              to=''
              className={({ isActive }) => (isActive ? 'text-white' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='search'
              className={({ isActive }) => (isActive ? 'text-white' : '')}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to='collections'
              className={({ isActive }) => (isActive ? 'text-white' : '')}
            >
              Your Library
            </NavLink>
          </li>
          {/* BLOCK #1 (END) */}

          {/* BLOCK #2 */}
          <li>
            <NavLink
              to='playlist'
              className={({ isActive }) => (isActive ? 'text-white' : '')}
            >
              Create Playlist
            </NavLink>
          </li>

          <li>
            <NavLink
              to='tracks'
              className={({ isActive }) => (isActive ? 'text-white' : '')}
            >
              Liked songs
            </NavLink>
          </li>

          {/* BLOCK #2 (END) */}
        </ul>
      </nav>
    </div>
  );
}

export default LeftNavigation;
