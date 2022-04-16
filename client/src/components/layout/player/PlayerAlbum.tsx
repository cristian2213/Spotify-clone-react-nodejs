import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHeart, BsFillHeartFill, BsPip } from 'react-icons/bs';

interface IProps {
  readonly title: string;
  readonly artist: string;
  readonly image: string;
  readonly color: string;
}

function PlayerAlbum({ title, artist, image }: IProps) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite((preValue) => !preValue);
  };

  const handleImageOnScreen = () => {
    setIsOnScreen((preValue) => !preValue);
  };

  return (
    <div className='flex flex-row gap-4 w-[30%]'>
      <div className='cursor-pointer relative'>
        <img
          className='block min-w-[56px] min-h-[56px] max-w-[56px] max-h-[56px] rounded object-cover object-center'
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
      </div>

      <div className='flex justify-start items-center w-full'>
        <div className='mr-6'>
          <Link className='block text-white text-[13px] font-semibold' to='#'>
            {title}
          </Link>
          <Link
            className='block text-[#b3b3b3] text-sm hover:underline'
            to='#'
          >
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
    </div>
  );
}

export default PlayerAlbum;
