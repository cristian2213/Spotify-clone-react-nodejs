import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

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

export default TopNavigationControlls;
