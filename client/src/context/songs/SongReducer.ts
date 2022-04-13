import { HTTP_GET_SONGS, HTTP_DOWNLOAD_SONG } from './songTypes';
const APP_STATIC_FILES = process.env.REACT_APP_STATIC_FILES;

function SongReducer(state: any, action: any) {
  const { type } = action;

  switch (true) {
    case type === HTTP_GET_SONGS:
      const divider = action.data.length / 2;
      const tracks1 = action.data.slice(0, divider);
      const tracks2 = action.data.slice(divider);

      const sections = [tracks1, tracks2].map((tracks, i) => {
        const randomId = Math.random() * 1000;
        const mappedTrucks = tracks.map((track: any) => {
          const randomId = Math.random() * 1000;
          return {
            id: `${track.id}-${randomId}`,
            name: track.title,
            artist: track.author.name,
            img: track.thumbnail.url,
          };
        });
        return {
          id: randomId,
          name: i === 0 ? 'Recently Played' : 'Recommended for today',
          singers: mappedTrucks,
        };
      });

      return {
        ...state,
        isLoanding: false,
        sections,
      };

    case type === HTTP_DOWNLOAD_SONG:
      // const currentSongs = [
      //   ...state.currentSongs,
      //   {
      //     ...action.data,
      //     audioSrc: `${APP_STATIC_FILES}/${action.data.songName}`,
      //   },
      // ];

      const currentSongs = [
        {
          ...action.data,
          audioSrc: `${APP_STATIC_FILES}/${action.data.songName}`,
        },
      ];
      return {
        ...state,
        currentSongs,
      };
    default:
      return state;
  }
}

export default SongReducer;
