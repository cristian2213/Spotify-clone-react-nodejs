import { useReducer, createContext, useCallback } from 'react';
import { HTTP_GET_SONGS } from './songTypes';
import SongReducer from './SongReducer';
import { httpClient } from '../../config/clientAxios';
import { Endpoints } from './songEndPoints';
import axios from 'axios';

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
      // const URL = 'http://localhost:8080/v1' + Endpoints.GetSongs;
      const URL = 'http://localhost:8080/v1/search';
      const resHttp = await axios.get(URL, {
        params: {
          random: 1,
        },
        timeout: 60000,
      });
      dispatch({
        type: HTTP_GET_SONGS,
        data: resHttp.data,
      });
    } catch (error) {
      // DOTO SOMETHING
      console.log(error);
    }
  }, []);

  const contextProvider = {
    sections: songState.sections,
    isLoanding: songState.isLoanding,
    httpGetSongs,
  };

  return (
    <SongContext.Provider value={contextProvider}>
      {children}
    </SongContext.Provider>
  );
}
