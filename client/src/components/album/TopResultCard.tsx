import { useState } from 'react';
import PlayBtn from './PlayBtn';

function TopResultCard({ song }: any) {
  console.log(song);
  const [isHover, setHover] = useState(false);
  const handleMouseOn = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  const handleClick = () => {
    // const songInfo: ISongInfo = {
    //   songId: '',
    //   image: '',
    //   title: '',
    //   artist: '',
    // };
    // downloadSong(songInfo);
  };
  const topResultClasses = `${isHover ? 'block' : 'hidden'} bottom-6 right-6`;

  const regex = /[-_@)(!=#%&/|?¿¡<>:;.,]$/g;
  const shortTitle =
    song.title.length < 16
      ? song.title
      : !regex.test(song.title)
      ? song.title
      : song.title.slice(0, 14);

  const shortAuthor =
    song.author.name.length < 29
      ? song.author.name
      : song.author.name.slice(0, 28);
  return (
    <div
      className='cursor-pointer p-5 relative rounded-lg bg-[#181818] hover:bg-[#282828] transition-all'
      onMouseOver={handleMouseOn}
      onMouseOut={handleMouseOut}
    >
      <img
        src={song.thumbnail.url}
        alt={song.title}
        height='92'
        width='92'
        className='rounded-xl mb-4 min-w-[92px] min-h-[92px] object-cover'
      />
      <p className='font-bold text-white text-[32px] tracking-tighter'>
        {shortTitle}
      </p>
      <p className='flex gap-6 mt-1'>
        <span className='text-sm text-[#b3b3b3]'>{shortAuthor}</span>
        <span className='text-sm font-bold bg-black px-2 rounded-3xl'>
          SONG
        </span>
      </p>

      <PlayBtn classes={topResultClasses} onClick={handleClick} />
    </div>
  );
}

export default TopResultCard;
