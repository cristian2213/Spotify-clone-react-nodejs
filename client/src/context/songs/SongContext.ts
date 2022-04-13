import { createContext } from "react";

export const SongContext = createContext({
    sections: [],
    isLoanding: true,
    httpGetSongs: () => {},
    downloadSong: (arg: any) => {},
    currentSongs: [
      {
        title: '',
        artist: '',
        audioSrc: '',
        image: '',
        color: '',
      },
    ],
  });