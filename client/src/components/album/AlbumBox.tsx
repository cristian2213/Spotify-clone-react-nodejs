import { useContext } from 'react';
import { useState } from 'react';
import { SongContext } from '../../context/songs/SongContext';
import PlayBtn from './PlayBtn';
import { ISongInfo } from '../../context/songs/songInterfaces';

interface ISinger {
  id: string;
  name: string;
  artist: string;
  img: string;
  alt: string;
}
interface IProps {
  singer: ISinger;
}

function AlbumBox({ singer }: IProps) {
  const [isHover, setHover] = useState(false);
  const { downloadSong } = useContext(SongContext);

  const handleMouseOn = () => setHover(true);
  const handleMouseOut = () => setHover(false);
  const handleClick = () => {
    const songInfo: ISongInfo = {
      songId: singer.id,
      image: singer.img,
      title: singer.name,
      artist: singer.artist,
    };
    downloadSong(songInfo);
  };

  const showPlayBtn = isHover ? 'block' : 'hidden';
  return (
    <li
      className='w-[182px] h-auto min-h-[264px] 
        p-4 
        rounded-md 
        bg-[#181818] 
        hover:bg-[#282828] 
        cursor-pointer
        transition-all'
      onMouseOver={handleMouseOn}
      onMouseOut={handleMouseOut}
    >
      <div className='relative'>
        <img
          src={singer.img}
          alt={singer.alt}
          className='block mb-5 rounded-md w-[150px] h-[150px] object-cover'
        />
        <PlayBtn classes={showPlayBtn} onClick={handleClick} />
      </div>
      <p className='mb-1 text-white font-bold'>{singer.name}</p>
      <span className='block text-sm leading-[1.2] font-medium text-[#b3b3b3]'>
        {singer.artist}
      </span>
    </li>
  );
}

export default AlbumBox;
