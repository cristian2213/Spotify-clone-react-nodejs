import React from 'react';
import { Link } from 'react-router-dom';
function TopBarDropDown() {
  return (
    <div className='relative inline-block text-left'>
      <div>
        {/* DROPDOWN */}
        <button
          type='button'
          className='flex flex-row items-center justify-center text-sm rounded-3xl bg-[rgba(0,0,0,.7)] gap-2 p-[2px] pr-2'
          id='options-menu'
        >
          <span className='flex flex-row items-center gap-2'>
            <img
              src='https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107724287823380&height=300&width=300&ext=1649994152&hash=AeRt2U5K1yu2kge2xAo'
              alt='userInfo'
              className='rounded-full w-7 h-7'
            />
            <strong>Axel Jhohan</strong>
          </span>
          <svg
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 1792 1792'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z'></path>
          </svg>
        </button>
      </div>
      {/* OPTIONS */}
      <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5'>
        <div
          className='py-1 '
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <Link
            to=''
            className='block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600'
            role='menuitem'
          >
            <span className='flex flex-col'>
              <span>Stripe</span>
            </span>
          </Link>
          <Link
            to=''
            className=' block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600'
            role='menuitem'
          >
            <span className='flex flex-col'>
              <span>Mastercard</span>
            </span>
          </Link>
          <Link
            to=''
            className=' block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600'
            role='menuitem'
          >
            <span className='flex flex-col'>
              <span>Paypal</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBarDropDown;
