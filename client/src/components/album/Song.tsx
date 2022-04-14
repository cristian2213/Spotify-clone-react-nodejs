import { BsHeart, BsThreeDots } from 'react-icons/bs';

function Song() {
  return (
    <li
      className='flex flex-row gap-5
        h-14
        p-2
        rounded-md 
        hover:bg-[#282828]'
    >
      <img
        src='https://i.scdn.co/image/ab67616d000048519e015d7c3257551a325fe03a'
        alt='how-to-fly-2'
        height='40'
        className='object-cover'
      />
      <div className='w-full flex flex-col'>
        <p className='font-semibold'>How To Fly</p>
        <span className='text-sm text-[#b3b3b3]'>Sticky Fingers</span>
      </div>

      <div
        className='flex items-center gap-7
        pr-5
        text-sm text-[#b3b3b3]
        font-semibold 
        ml-auto'
      >
        <BsHeart size={16} className='cursor-pointer' />
        <span>3:22</span>

        <BsThreeDots size={16} />
      </div>
    </li>
  );
}

export default Song;
