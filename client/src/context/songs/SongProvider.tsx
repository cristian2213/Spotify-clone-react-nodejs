import { useReducer, useCallback } from 'react';
import {
  HTTP_GET_SONGS,
  HTTP_DOWNLOAD_SONG,
  HTTP_IS_SEARCHING,
  HTTP_SEARCHES,
  CLEAR_SEARCHES,
} from './songTypes';
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
      {
        title: 'Saves',
        artist: 'Sticky Fingers',
        audioSrc: APP_STATIC_FILES + '/XZm3TKMZXJ4-1649885930286.mp3',
        image:
          'https://i.ytimg.com/vi/XZm3TKMZXJ4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBPfWHQuxdTxI0j3MHo5CMvCBXJuw',
      },
    ] as ISong[],
    isSearching: false,
    searches: [],
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
   * Search songs - Returns all songs
   */
  const searchSong = useCallback(async (params) => {
    try {
      handleIsSearching(true);
      const URL = `${APP_HTTP_SERVER}${Endpoints.GetSongs}`;
      const httpRes = await httpClient.get(URL, {
        params: { ...params },
      });
      dispatch({
        type: HTTP_SEARCHES,
        data: httpRes.data,
      });
    } catch (error) {
    } finally {
      handleIsSearching(false);
    }
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

  /**
   * Set request to true
   */
  const handleIsSearching = (reqStatus: boolean) => {
    dispatch({
      type: HTTP_IS_SEARCHING,
      data: reqStatus,
    });
  };

  /**
   * Clear all searching songs
   */
  const clearSearches = () => {
    dispatch({
      type: CLEAR_SEARCHES,
      data: [],
    });
  };

  const contextProvider = {
    sections: songState.sections,
    isLoanding: songState.isLoanding,
    currentSongs: songState.currentSongs,
    isSearching: songState.isSearching,
    searches: songState.searches,
    httpGetSongs,
    downloadSong,
    searchSong,
    handleIsSearching,
    clearSearches,
  };

  return (
    <SongContext.Provider value={contextProvider}>
      {children}
    </SongContext.Provider>
  );
}
