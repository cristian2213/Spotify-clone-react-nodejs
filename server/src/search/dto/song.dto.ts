export class Avatar {
  url: string;
  width: number;
  height: number;
}
export class Author {
  name: string;
  channelID: string;
  url: string;
  avatar: Avatar;
}
export class Thumbnail {
  url: string;
  width: number;
  height: number;
}
export class Song {
  id: string;
  title: string;
  url: string;
  thumbnail: Thumbnail;
  author: Author;
  duration: string;
}
