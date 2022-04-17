import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import AlbumBox from './AlbumBox';

interface IProps {
  singers: Array<any>;
}

function ListAlbums({ singers }: IProps) {
  const containerRef = useRef<any>();
  const [breakPoint, setBreakPoint] = useState<number[]>([]);

  useEffect(() => {
    let observer: any;
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      const heightSize = Math.ceil(entry.contentRect.height);
      const widthSize = Math.ceil(entry.contentRect.width);
      const defaultHeight = 271;
      const target = entry.target;

      if (heightSize > defaultHeight) {
        setBreakPoint((preBreakPoint: number[]) => [
          widthSize,
          ...preBreakPoint,
        ]);
        const items = target.querySelectorAll('li:not(.hidden)');
        const lastItem = items[items.length - 1];
        lastItem.classList.add('hidden');
      } else if (widthSize > breakPoint[0]) {
        const hiddienItems = target.querySelectorAll('li[class*="hidden"]');
        if (hiddienItems.length !== 0) {
          hiddienItems[0].classList.remove('hidden');
          setBreakPoint((preBreakPoint: number[]) => {
            const oldBreakPoint = breakPoint[0];
            return preBreakPoint.filter(
              (breakPoint: number) => breakPoint !== oldBreakPoint
            );
          });
        }
      }
    });
    if (containerRef.current) {
      observer = containerRef.current;
      resizeObserver.observe(observer);
    }
    return () => {
      resizeObserver.unobserve(observer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakPoint]);

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
      id='myList'
    >
      {leakedSingers.map((singer: any) => (
        <AlbumBox singer={singer} key={singer.id} />
      ))}
    </ul>
  );
}

export default ListAlbums;
