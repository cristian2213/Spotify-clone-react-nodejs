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
      // const httpRes = await httpClient.get(URL, {
      //   params: {
      //     random: 1,
      //   },
      // });
      const httpRes = {
        data: [
          {
            id: '6pw3Uo4htB4',
            title: 'New beginning - Luke Faulkner',
            url: 'https://www.youtube.com/watch?v=6pw3Uo4htB4',
            thumbnail: {
              url: 'https://i.ytimg.com/vi/6pw3Uo4htB4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDofj8tCOwKinUh06HU683_KeLsUQ',
              width: 720,
              height: 404,
            },
            author: {
              name: 'Luke Faulkner',
              channelID: 'UCwYHy-0_HWounepQMjvHNzA',
              url: 'https://www.youtube.com/channel/UCwYHy-0_HWounepQMjvHNzA',
              avatar: {
                url: 'https://yt3.ggpht.com/ytc/AKedOLS7jN2pT5Lw9R08KjFxXaopDHnXQgjdWTAeIBS7_Q=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
                height: 68,
              },
            },
            duration: '4:05',
          },
          {
            id: 'hKX9rEEgb0I',
            title: 'STICKY FINGERS - HOW TO FLY (Official video)',
            url: 'https://www.youtube.com/watch?v=hKX9rEEgb0I',
            thumbnail: {
              url: 'https://i.ytimg.com/vi/hKX9rEEgb0I/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBo1SRaQPrqVnBk8iBKk8bwLxpf8A',
              width: 720,
              height: 404,
            },
            author: {
              name: 'Sticky Fingers',
              channelID: 'UCRC74iukYTRgzOZhlQq1f7A',
              url: 'https://www.youtube.com/channel/UCRC74iukYTRgzOZhlQq1f7A',
              avatar: {
                url: 'https://yt3.ggpht.com/cDtEHF6dpQz8yV7Yojm_RgsK6KWnAmXNmuoqf_6t2HkGVn-dHLfgAqLMk7uUD_T3BrX93P_kitQ=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
                height: 68,
              },
            },
            duration: '3:17',
          },
          {
            id: 'rwCkzUI43m4',
            title: 'Rum Rage - Sticky Fingers',
            url: 'https://www.youtube.com/watch?v=rwCkzUI43m4',
            thumbnail: {
              url: 'https://i.ytimg.com/vi/rwCkzUI43m4/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA8RoTXsyjmoGrKlmGyI2EfTELihQ',
              width: 480,
              height: 270,
            },
            author: {
              name: 'Sureshaker Music',
              channelID: 'UC_P5i7ahSTtw4EdHBnfwGlg',
              url: 'https://www.youtube.com/c/SureshakerMusic',
              avatar: {
                url: 'https://yt3.ggpht.com/ytc/AKedOLQn0QQ-LTwe_7Bc-up-UmgqXW00HsScEUWXsJMR=s68-c-k-c0x00ffffff-no-rj',
                width: 68,
                height: 68,
              },
            },
            duration: '4:13',
          },
          {
            id: 'XZm3TKMZXJ4',
            title: 'Sticky Fingers - Saves The Day (Official Music Clip)',
            url: 'https://www.youtube.com/watch?v=XZm3TKMZXJ4',
            thumbnail: {
              url: 'https://i.ytimg.com/vi/XZm3TKMZXJ4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBPfWHQuxdTxI0j3MHo5CMvCBXJuw',
              width: 720,
              height: 404,
            },
            author: {
              name: 'Sticky Fingers',
              channelID: 'UCRC74iukYTRgzOZhlQq1f7A',
              url: 'https://www.youtube.com/channel/UCRC74iukYTRgzOZhlQq1f7A',
              avatar: {
                url: 'https://yt3.ggpht.com/cDtEHF6dpQz8yV7Yojm_RgsK6KWnAmXNmuoqf_6t2HkGVn-dHLfgAqLMk7uUD_T3BrX93P_kitQ=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
                height: 68,
              },
            },
            duration: '4:06',
          },
          {
            id: 'R1UKHQHsHCM',
            title: 'Sticky Fingers - Lekkerboy (Official Music Clip)',
            url: 'https://www.youtube.com/watch?v=R1UKHQHsHCM',
            thumbnail: {
              url: 'https://i.ytimg.com/vi/R1UKHQHsHCM/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAVgC4muFAl3UOsFe880UdpPqbYQg',
              width: 480,
              height: 270,
            },
            author: {
              name: 'Sticky Fingers',
              channelID: 'UCRC74iukYTRgzOZhlQq1f7A',
              url: 'https://www.youtube.com/channel/UCRC74iukYTRgzOZhlQq1f7A',
              avatar: {
                url: 'https://yt3.ggpht.com/cDtEHF6dpQz8yV7Yojm_RgsK6KWnAmXNmuoqf_6t2HkGVn-dHLfgAqLMk7uUD_T3BrX93P_kitQ=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
                height: 68,
              },
            },
            duration: '5:03',
          },
          {
            id: 'GUvNtIeqd_U',
            title: 'Ballade - Luke Faulkner',
            url: 'https://www.youtube.com/watch?v=GUvNtIeqd_U',
            thumbnail: {
              url: 'https://i.ytimg.com/vi/GUvNtIeqd_U/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAjQGP3Riu4EDEAD7J7xUwfHanLAA',
              width: 720,
              height: 404,
            },
            author: {
              name: 'Luke Faulkner',
              channelID: 'UCwYHy-0_HWounepQMjvHNzA',
              url: 'https://www.youtube.com/channel/UCwYHy-0_HWounepQMjvHNzA',
              avatar: {
                url: 'https://yt3.ggpht.com/ytc/AKedOLS7jN2pT5Lw9R08KjFxXaopDHnXQgjdWTAeIBS7_Q=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
                height: 68,
              },
            },
            duration: '2:54',
          },
          {
            id: '8bA123MTbQ8',
            title: 'Etude Op. 36 | BLUMENFELD | Luke Faulkner',
            url: 'https://www.youtube.com/watch?v=8bA123MTbQ8',
            thumbnail: {
              url: 'https://i.ytimg.com/vi/8bA123MTbQ8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAjX5shDC3nJSfiGNnrnkU5-5da-w',
              width: 720,
              height: 404,
            },
            author: {
              name: 'Luke Faulkner',
              channelID: 'UCwYHy-0_HWounepQMjvHNzA',
              url: 'https://www.youtube.com/channel/UCwYHy-0_HWounepQMjvHNzA',
              avatar: {
                url: 'https://yt3.ggpht.com/ytc/AKedOLS7jN2pT5Lw9R08KjFxXaopDHnXQgjdWTAeIBS7_Q=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
                height: 68,
              },
            },
            duration: '4:53',
          },
          {
            id: 'VHTWMhtYEXY',
            title: 'Étude in F major | ROMANTIC PIANO | Luke Faulkner',
            url: 'https://www.youtube.com/watch?v=VHTWMhtYEXY',
            thumbnail: {
              url: 'https://i.ytimg.com/vi/VHTWMhtYEXY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA-D5yOg1gQzKSAbf-CRSYNnJeMkQ',
              width: 720,
              height: 404,
            },
            author: {
              name: 'Luke Faulkner',
              channelID: 'UCwYHy-0_HWounepQMjvHNzA',
              url: 'https://www.youtube.com/channel/UCwYHy-0_HWounepQMjvHNzA',
              avatar: {
                url: 'https://yt3.ggpht.com/ytc/AKedOLS7jN2pT5Lw9R08KjFxXaopDHnXQgjdWTAeIBS7_Q=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
                height: 68,
              },
            },
            duration: '3:06',
          },
          {
            id: '1kfNVsc-8Kw',
            title: 'Daydreaming - Luke Faulkner',
            url: 'https://www.youtube.com/watch?v=1kfNVsc-8Kw',
            thumbnail: {
              url: 'https://i.ytimg.com/vi/1kfNVsc-8Kw/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD24hGX3gpSlwwnpgQZOYH0RqP2aQ',
              width: 720,
              height: 404,
            },
            author: {
              name: 'Luke Faulkner',
              channelID: 'UCwYHy-0_HWounepQMjvHNzA',
              url: 'https://www.youtube.com/channel/UCwYHy-0_HWounepQMjvHNzA',
              avatar: {
                url: 'https://yt3.ggpht.com/ytc/AKedOLS7jN2pT5Lw9R08KjFxXaopDHnXQgjdWTAeIBS7_Q=s88-c-k-c0x00ffffff-no-rj',
                width: 68,
                height: 68,
              },
            },
            duration: '2:56',
          },
          {
            id: '_mVW8tgGY_w',
            title: 'Beethoven - Für Elise (Piano Version)',
            url: 'https://www.youtube.com/watch?v=_mVW8tgGY_w',
            thumbnail: {
              url: 'https://i.ytimg.com/vi/_mVW8tgGY_w/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDEYhuefj5By2KfGNdqMNEncD711Q',
              width: 480,
              height: 270,
            },
            author: {
              name: 'Georgii Cherkin',
              channelID: 'UClUrRTQqlnqHfEJxpXE6Pmg',
              url: 'https://www.youtube.com/c/Lacrimosa12',
              avatar: {
                url: 'https://yt3.ggpht.com/bwVMGejJFE1GURtheFjlaCFnmw0J_cYK2w7VlwjQvgpesTsZBM_XNmz8bBHyDP6P58KudkhiX0Y=s68-c-k-c0x00ffffff-no-rj',
                width: 68,
                height: 68,
              },
            },
            duration: '2:56',
          },
          {
            id: 'lC0ncp6VE5s',
            title: 'Moonlight Sonata: Adagio Sostenuto',
            url: 'https://www.youtube.com/watch?v=lC0ncp6VE5s',
            thumbnail: {
              url: 'https://i.ytimg.com/vi/lC0ncp6VE5s/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBnQoJYQE3qeVsWhIPnRDBafhbIhw',
              width: 720,
              height: 404,
            },
            author: {
              name: 'Ludwig van Beethoven - Topic',
              channelID: 'UCnsAooIr-Dsr8zJOCSadQcA',
              url: 'https://www.youtube.com/channel/UCnsAooIr-Dsr8zJOCSadQcA',
              avatar: {
                url: 'https://yt3.ggpht.com/ZhIhFYMT_kf-wbgbTvbsigVw0Vu494ZUin2IyddIQqywDumtOXrgJOCxAoFjLIAx4ufX8H6V=s68-c-k-c0x00ffffff-no-rj',
                width: 68,
                height: 68,
              },
            },
            duration: '5:28',
          },
          {
            id: '9E6b3swbnWg',
            title: 'Chopin - Nocturne op.9 No.2',
            url: 'https://www.youtube.com/watch?v=9E6b3swbnWg',
            thumbnail: {
              url: 'https://i.ytimg.com/vi/9E6b3swbnWg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCnv7kBxIHd7CnhGalDKkbBeFZt3A',
              width: 720,
              height: 404,
            },
            author: {
              name: 'andrea romano',
              channelID: 'UC1Prrgck1S6abc3yPWhc7Jw',
              url: 'https://www.youtube.com/c/andrearomano6',
              avatar: {
                url: 'https://yt3.ggpht.com/ytc/AKedOLSNTnbWqunaV86Gws7aVoKZhevMDkjjcvyqlOB7SQ=s68-c-k-c0x00ffffff-no-rj',
                width: 68,
                height: 68,
              },
            },
            duration: '4:30',
          },
        ],
      };
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
