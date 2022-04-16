import { createContext } from 'react';

export const SongContext = createContext({
  sections: [],
  isLoanding: true,
  httpGetSongs: () => {},
  downloadSong: (arg: any) => {},
  searchSong: (arg: any) => {},
  clearSearches: () => {},
  currentSongs: [
    {
      title: '',
      artist: '',
      audioSrc: '',
      image: '',
      color: '',
    },
  ],
  searches: [],
});
