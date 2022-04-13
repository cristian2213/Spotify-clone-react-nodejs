import { useReducer, useCallback } from 'react';
import { HTTP_GET_SONGS, HTTP_DOWNLOAD_SONG } from './songTypes';
import SongReducer from './SongReducer';
import { httpClient } from '../../config/clientAxios';
import { Endpoints } from './songEndPoints';
import { ISong, ISongState, ISongInfo } from './songInterfaces';
import { SongContext } from './SongContext';

const APP_HTTP_SERVER = process.env.REACT_APP_HTTP_SERVER;
const APP_STATIC_FILES = process.env.REACT_APP_STATIC_FILES;

export function SongProvider({ children }: any) {
  const initialState: ISongState = {
    sections: [],
    isLoanding: true,
    currentSongs: [
      // BY default
      {
        title: 'Saves',
        artist: 'Sticky Fingers',
        audioSrc: APP_STATIC_FILES + '/XZm3TKMZXJ4-1649867143735.mp3',
        image:
          'https://i.ytimg.com/vi/XZm3TKMZXJ4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBPfWHQuxdTxI0j3MHo5CMvCBXJuw',
      },
    ] as ISong[],
  };

  const [songState, dispatch] = useReducer(SongReducer, initialState);

  /**
   * httpGetSongs - Returns all songs
   */
  const httpGetSongs = useCallback(async () => {
    try {
      const URL = `${APP_HTTP_SERVER}${Endpoints.GetSongs}`;
      const httpRes = await httpClient.get(URL, {
        params: {
          random: 1,
        },
      });
      dispatch({
        type: HTTP_GET_SONGS,
        data: httpRes.data,
      });
    } catch (error) {}
  }, []);

  /**
   * downloadSong - Downloads one song in the server-side and returns the name of the file
   */
  const downloadSong = async (song: ISongInfo) => {
    try {
      const { songId } = song;

      const URL = `${APP_HTTP_SERVER}${Endpoints.DownloadSong}`;
      const httpRes = await httpClient.get(URL, {
        params: {
          query: songId.split('-')[0],
        },
      });

      dispatch({
        type: HTTP_DOWNLOAD_SONG,
        data: {
          ...song,
          ...httpRes.data,
        },
      });
    } catch (error) {}
  };

  const contextProvider = {
    sections: songState.sections,
    isLoanding: songState.isLoanding,
    currentSongs: songState.currentSongs,
    httpGetSongs,
    downloadSong,
  };

  return (
    <SongContext.Provider value={contextProvider}>
      {children}
    </SongContext.Provider>
  );
}
