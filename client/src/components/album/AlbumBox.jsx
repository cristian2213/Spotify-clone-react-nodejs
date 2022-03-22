import { useState } from 'react';
import PlayBtn from './PlayBtn';

function AlbumBox({ singer }) {
  const [isHover, setHover] = useState(false);
  const handleMouseOn = (event) => {
    setHover(true);
  };
  const handleMouseOut = (event) => {
    setHover(false);
  };

  const showPlayBtn = isHover ? 'block' : 'hidden';
  return (
    <li
      className='w-[182px] h-auto min-h-[264px]  p-4 rounded-md bg-[#181818] cursor-pointer hover:bg-[#282828] transition-all'
      onMouseOver={handleMouseOn}
      onMouseOut={handleMouseOut}
    >
      <div className='relative'>
        <img
          src={singer.img}
          alt={singer.alt}
          className='block mb-5 rounded-md'
        />
        <PlayBtn classes={showPlayBtn} />
      </div>
      <p className='mb-1 text-white font-bold'>{singer.name}</p>
      <span className='block text-sm leading-[1.2] font-medium text-[#b3b3b3]'>
        {singer.artist}
      </span>
    </li>
  );
}

export default AlbumBox;
