import { IHttpSong } from './interfaces';
import Song from './Song';
import SongTitle from './SongTitle';


function ListSongs({ songs }: any) {
  const mappedSongs: IHttpSong[] = songs.map((song: any) => {
    const limit = 54;
    let title =
      song.title.length <= limit ? song.title : song.title.slice(0, limit);
    title += '...';

    return {
      id: song.id,
      title,
      url: song.thumbnail.url,
      name: song.author.name,
      duration: song.duration,
    };
  });

  return (
    <div className='w-4/5'>
      <SongTitle
        title='Songs'
        domProps={{
          className: 'mb-6 text-white font-bold text-[24px]',
        }}
      />
      <ul>
        {mappedSongs.map((song: IHttpSong) => (
          <Song song={song}  key={song.id} />
        ))}
      </ul>
    </div>
  );
}

export default ListSongs;
