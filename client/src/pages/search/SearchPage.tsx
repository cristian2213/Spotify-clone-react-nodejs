import { useContext } from 'react';
import { SongContext } from '../../context/songs/SongContext';
import TopResult from '../../components/album/TopResult';
import ListSongs from '../../components/album/ListSongs';

function SearchPage() {
  const { searches } = useContext(SongContext);

  if (searches.length === 0) {
    return null;
  }

  if (searches.length === 1) {
    const song = searches[0];
    return <TopResult song={song} />;
  }

  let topSearch = [];
  let filteredSearches = [];
  if (searches.length > 6) {
    for (let i = 0; i < 6; i++) {
      if (i !== 0) {
        filteredSearches.push(searches[i]);
      }
      topSearch.push(searches[i]);
    }
  } else {
    topSearch = searches[0];
    filteredSearches = searches.slice(1);
  }

  return (
    <div className='flex items-start justify-between gap-6'>
      <TopResult />
      {/* filteredSearches */}
      <ListSongs />
    </div>
  );
}

export default SearchPage;
