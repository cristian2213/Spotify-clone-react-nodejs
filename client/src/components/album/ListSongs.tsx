import Song from './Song';
import SongTitle from './SongTitle';

function ListSongs() {
  return (
    <div className='w-4/5'>
      <SongTitle
        title='Songs'
        className='mb-6 text-white font-bold text-[24px]'
      />
      <ul>
        {/* <Song /> */}
      </ul>
    </div>
  );
}

export default ListSongs;
