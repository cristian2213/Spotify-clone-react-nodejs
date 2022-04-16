import { useState, MouseEvent, useContext } from 'react';
import {
  BsHeart,
  BsThreeDots,
  BsFillPlayFill,
  BsFillHeartFill,
} from 'react-icons/bs';
import { IHttpSong } from './interfaces';
import { SongContext } from '../../context/songs/SongContext';
import { ISongInfo } from '../../context/songs/songInterfaces';

interface IProps {
  song: IHttpSong;
}

function Song({ song }: IProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { downloadSong } = useContext(SongContext);

  const handleFavorite = (event: MouseEvent<HTMLOrSVGElement>) => {
    event.stopPropagation();
    setIsFavorite((preValue) => !preValue);
  };

  const handleClick = (event: MouseEvent<any>) => {
    event.stopPropagation();
    const songInfo: ISongInfo = {
      songId: song.id,
      image: song.url,
      title: song.title,
      artist: song.name,
    };
    console.log(songInfo);
    downloadSong(songInfo);
  };

  return (
    <li
      className='flex flex-row gap-5
        h-14
        p-2
        rounded-md 
        hover:bg-[#282828]
        group'
      onClick={handleClick}
    >
      <div
        className='w-10 h-10 
          relative'
      >
        <img
          src={song.url}
          alt={song.title}
          height='40'
          width='40'
          className='h-full 
            object-cover 
            object-center 
            max-w-[initial]'
        />
        <BsFillPlayFill
          className='hidden
           absolute 
           top-2/4 left-2/4 
           z-10 
           translate-x-[-50%] translate-y-[-50%] 
           w-full h-full 
           p-2 
           group-hover:block 
           group-hover:bg-[rgba(0,0,0,.5)]'
          size={20}
        />
      </div>
      <div className='w-full flex flex-col'>
        <p className='font-semibold'>{song.title}</p>
        <span className='text-sm text-[#b3b3b3]'>{song.name}</span>
      </div>

      <div
        className='flex items-center gap-7
        pr-5
        text-sm text-[#b3b3b3]
        font-semibold 
        ml-auto'
      >
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
            className='cursor-pointer 
              hidden 
              group-hover:block'
            onClick={handleFavorite}
          />
        )}

        <span>{song.duration}</span>

        <BsThreeDots size={16} />
      </div>
    </li>
  );
}

export default Song;
