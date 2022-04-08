import { useEffect, useContext } from 'react';
import SkeletonHome from '../../components/layout/skeletonHome/SkeletonHome';
import { SongContext } from '../../context/songs/SongProvider';

import AlbumsSections from '../../components/album/AlbumsSections';

function HomePage() {
  // const {
  //   httpGetSongs,
  //   sections: gotSections,
  //   isLoanding,
  // } = useContext(SongContext);
  // useEffect(() => {
  //   httpGetSongs();
  // }, [httpGetSongs]);

  const isLoanding = false;
  const gotSections: Array<any> = [];
  return (
    <>
      {isLoanding ? (
        <SkeletonHome />
      ) : (
        <section>
          <AlbumsSections sections={gotSections} />
        </section>
      )}
    </>
  );
}

export default HomePage;
