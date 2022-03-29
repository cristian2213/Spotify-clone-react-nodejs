import AlbumBox from './AlbumBox';

interface IProps {
  singers: Array<any>;
}

function ListAlbums({ singers }: IProps) {
  const LIMIT = 36;
  const leakedSingers = singers.map((singer) => {
    const description = singer.artist.substring(0, LIMIT);
    const shortDescription =
      description.slice(-1) === ' '
        ? description.substring(0, description.length - 1) + '...'
        : description + '...';
    return {
      ...singer,
      alt: singer.name,
      artist: singer.artist.length >= LIMIT ? shortDescription : description,
    };
  });

  return (
    <ul className='custom-grid-home justify-items-center items-center'>
      {leakedSingers.map((singer) => (
        <AlbumBox singer={singer} key={singer.id} />
      ))}
    </ul>
  );
}

export default ListAlbums;
