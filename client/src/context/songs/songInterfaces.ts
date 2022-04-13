export interface ISongState {
  sections: Array<any>;
  isLoanding: boolean;
  currentSongs: Array<any>;
}

export interface ISong {
  songId: string;
  image: string;
  title: string;
  artist: string;
  audioSrc: string;
  color: string;
}

export interface ISongInfo {
  songId: string;
  image: string;
  title: string;
  artist: string;
}

