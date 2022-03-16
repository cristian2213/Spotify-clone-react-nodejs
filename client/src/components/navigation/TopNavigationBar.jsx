import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import TopBarDropDown from './TopBarDropDown';

function TopNavigationBar() {
  return (
    <div className='flex flex-row items-center justify-between mb-6 py-4'>
      {/* CONTROLLS LEFT - RIGHT */}
      <TopNavigationControlls />

      {/* UPGRADE BUTTON - DOWNLIST */}
      <div className='flex  flex-row items-center justify-center gap-14'>
        <button className='w-[140px] h-9 rounded-3xl bg-[rgba(0,0,0,.7)] border border-[rgba(255,255,255,.7)] uppercase font-bold text-xs'>
          Upgrade
        </button>
        <TopBarDropDown />
      </div>
    </div>
  );
}

function TopNavigationControlls() {
  return (
    <div className='flex flex-row items-center gap-4'>
      <span className='bg-black opacity-60 flex items-center justify-center w-9 h-9 rounded-full cursor-not-allowed'>
        <FaAngleLeft size={24} color='#b3b3b3' />
      </span>
      <span className='bg-black opacity-60 flex items-center justify-center w-9 h-9 rounded-full cursor-pointer'>
        <FaAngleRight size={24} color='#b3b3b3' />
      </span>
    </div>
  );
}

export default TopNavigationBar;
