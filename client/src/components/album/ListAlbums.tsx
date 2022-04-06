import { useCallback, useMemo } from 'react';
import AlbumBox from './AlbumBox';

interface IProps {
  singers: Array<any>;
}

function ListAlbums({ singers }: IProps) {
  const LIMIT = 14;
  const LIMIT_NAME = 24;

  const leakedSingers = useMemo(() => {
    return singers.map((singer) => {
      const description = singer.artist.substring(0, LIMIT);
      const name = singer.name.substring(0, LIMIT_NAME);
      const shortDescription =
        description.slice(-1) === ' '
          ? description.substring(0, description.length - 1) + '...'
          : description + '...';

      const shortName =
        name.slice(-1) === ' '
          ? name.substring(0, name.length - 1) + '...'
          : name + '...';

      return {
        ...singer,
        alt: singer.name,
        artist: singer.artist.length >= LIMIT ? shortDescription : description,
        name: singer.name.length >= LIMIT_NAME ? shortName : name,
      };
    });
  }, [singers]);

  return (
    <ul className='custom-grid-home justify-items-center items-center'>
      {leakedSingers.map((singer) => (
        <AlbumBox singer={singer} key={singer.id} />
      ))}
    </ul>
  );
}

export default ListAlbums;
