import { useReducer, createContext, useCallback } from 'react';
import { HTTP_GET_SONGS } from './songTypes';
import SongReducer from './SongReducer';
import { httpClient } from '../../config/clientAxios';
import { Endpoints } from './songEndPoints';

const APP_HTTP_SERVER = process.env.REACT_APP_HTTP_SERVER;

interface ISongState {
  sections: Array<any>;
  isLoanding: boolean;
}
type HttpFunction = () => any;
interface ISongContext {
  sections: Array<any>;
  httpGetSongs: HttpFunction;
}
export const SongContext = createContext({
  sections: [],
  isLoanding: true,
  httpGetSongs: () => {},
});

export function SongProvider({ children }: any) {
  const initialState: ISongState = {
    sections: [],
    isLoanding: true,
  };

  const [songState, dispatch] = useReducer(SongReducer, initialState);

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
    } catch (error) {
      // DOTO SOMETHING
      // console.log(error);
    }
  }, []);

  const httpGetOneSong = useCallback(async (params) => {
    try {
      const URL = `${APP_HTTP_SERVER}${Endpoints.GetSongs}`;
      const httpRes = await httpClient.get(URL, {
        params,
      });
      return httpRes.data[0];
    } catch (error: any) {
      return true;
    }
  }, []);

  const contextProvider = {
    sections: songState.sections,
    isLoanding: songState.isLoanding,
    httpGetSongs,
    httpGetOneSong,
  };

  return (
    <SongContext.Provider value={contextProvider}>
      {children}
    </SongContext.Provider>
  );
}
