import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import AlbumBox from './AlbumBox';

interface IProps {
  singers: Array<any>;
}

function ListAlbums({ singers }: IProps) {
  const containerRef = useRef<any>();
  const [isResized, setIsResized] = useState(false);
  const [breakPoint, setBreakPoint] = useState(0);

  useEffect(() => {
    let observer: any;
    const resizeObserver = new ResizeObserver((entries: any) => {
      const entry = entries[0];
      const heightSize = Math.ceil(entry.contentRect.height);
      const widthSize = Math.ceil(entry.contentRect.width);
      const defaultHeight = 271;

      if (heightSize > defaultHeight && !isResized) {
        setBreakPoint(widthSize);
        entry.target.lastChild.classList.add('hidden');
        setIsResized(true);
      } else if (widthSize > breakPoint && isResized) {
        entry.target.lastChild.classList.remove('hidden');
        setIsResized(false);
      }
    });
    if (containerRef.current) {
      observer = containerRef.current;
      resizeObserver.observe(observer);
    }

    return () => {
      resizeObserver.unobserve(observer);
    };
  }, [breakPoint, isResized]);

  const leakedSingers = useMemo(() => {
    const LIMIT = 14;
    const LIMIT_NAME = 24;
    return singers.map((singer: any) => {
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
    <ul
      className='custom-grid-home justify-items-center items-center'
      ref={containerRef}
    >
      {leakedSingers.map((singer: any) => (
        <AlbumBox singer={singer} key={singer.id} />
      ))}
    </ul>
  );
}

export default ListAlbums;
