import { HTTP_GET_SONGS } from './songTypes';
import { v4 as uuidv4 } from 'uuid';

function SongReducer(state: any, action: any) {
  const { type } = action;

  switch (true) {
    case type === HTTP_GET_SONGS:
      const divider = action.data.length / 2;
      const tracks1 = action.data.slice(0, divider);
      const tracks2 = action.data.slice(divider);

      const sections = [tracks1, tracks2].map((tracks, i) => {
        const mappedTrucks = tracks.map((track: any) => {
          return {
            id: uuidv4(),
            name: track.title,
            artist: track.author.name,
            img: track.thumbnail.url,
          };
        });
        return {
          id: uuidv4(),
          name: i === 0 ? 'Recently Played' : 'Recommended for today',
          singers: mappedTrucks,
        };
      });

      return {
        ...state,
        isLoanding: false,
        sections,
      };

    default:
      return state;
  }
}

export default SongReducer;
