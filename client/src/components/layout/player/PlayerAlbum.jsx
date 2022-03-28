import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHeart, BsFillHeartFill, BsPip } from 'react-icons/bs';

function PlayerAlbum({ title, artist, image }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOnScreen, setIsOnScreen] = useState(false);

  const handleFavorite = () => {
    setIsFavorite((preValue) => !preValue);
  };

  const handleImageOnScreen = () => {
    setIsOnScreen((preValue) => !preValue);
  };

  return (
    <div className='flex flex-row gap-4'>
      <div className='cursor-pointer relative'>
        <img
          className='block w-14 h-14 rounded object-cover'
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
      </div>

      <div className='flex flex-col justify-center items-start mr-3'>
        <Link className='block text-white text-[13px] font-semibold' to='/'>
          {title}
        </Link>
        <Link className='block text-[#b3b3b3] text-sm hover:underline' to='/'>
          {artist}
        </Link>
      </div>

      <div className='flex flex-row items-center justify-center gap-4'>
        {isFavorite ? (
          <BsFillHeartFill
            color='#1db954'
            size={16}
            className='cursor-pointer'
            onClick={handleFavorite}
          />
        ) : (
          <BsHeart
            size={16}
            className='cursor-pointer'
            onClick={handleFavorite}
          />
        )}

        <BsPip
          size={16}
          color={isOnScreen ? '#1db954' : ''}
          className='cursor-pointer'
          onClick={handleImageOnScreen}
        />
      </div>
    </div>
  );
}

export default PlayerAlbum;
