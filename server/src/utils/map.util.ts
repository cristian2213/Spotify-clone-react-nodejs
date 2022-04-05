import { Injectable } from '@nestjs/common';
import { SearchDto } from './../search/dto/query.dto';
import { Song, Author } from '../search/dto/song.dto';

@Injectable()
export class GlobalMap {
  public mapSongs(songs: Array<any>): Song[] {
    const mappedSong: Song[] = songs.map((song: any) => {
      if (song.items || song.type == 'mix') return;

      const mappedThumbnail = song.bestThumbnail || song.thumbnails[0];
      const mappedDuration = song.duration.split(':');

      // ['hh': 'mm': 'ss']
      if (mappedDuration.length > 2) return;
      if (+mappedDuration[0] > 6) return;

      let author: Author = {
        name: '',
        channelID: '',
        url: '',
        avatar: {
          url: '',
          width: 0,
          height: 0,
        },
      };

      if (song.author && Object.values(song.author).length > 0) {
        author.name = song.author.name;
        author.channelID = song.author.channelID;
        author.url = song.author.url;
        author.avatar = song.author.bestAvatar || song.author.avatars[0];
      }

      return {
        id: song.id || '',
        title: song.title || '',
        url: song.url || '',
        thumbnail: mappedThumbnail,
        author,
        duration: song.duration,
      };
    });

    return mappedSong.filter((song) => song != null);
  }

  public mapSearch(search: string | SearchDto): string {
    const mapped = (search as unknown as string)
      .toLowerCase()
      .trim()
      .split(/[-,._:; ]/g)
      .join(' ')
      .trim();
    return mapped;
  }
}
