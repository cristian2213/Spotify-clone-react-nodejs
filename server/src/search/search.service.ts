import { Injectable } from '@nestjs/common';
// import * as ytdl from 'ytdl-core';
import * as ytsr from 'ytsr';
import { Item } from 'ytsr';
import { Song } from './dto/song.dto';
import { GlobalMap } from '../utils/map.util';
import { GlobalRandom } from '../utils/random.util';


@Injectable()
export class SearchService {
  protected readonly url = 'https://www.youtube.com';
  protected readonly defaultLimit = 1;
  protected readonly defaultPage = 0;

  constructor(
    private readonly globalMap: GlobalMap,
    private readonly globalRandom: GlobalRandom,
  ) {}

  // #5 - Create swagger documentation ❌
  async fetchSongs(
    search: string,
    limit: number,
    page: number,
    random: boolean,
    total: number,
  ): Promise<Song[] | Song | Item[]> {
    const defLimit = limit || this.defaultLimit;
    let songs: Song[];

    if (random) {
      while (true) {
        try {
          const songsIDs = this.globalRandom.getRandomSongs(total || 12);
          const randomSongs = await this.getMapRandomSongs(songsIDs);
          songs = randomSongs;
          break;
        } catch {
          continue;
        }
      }
    } else {
      const mappedSearch = this.globalMap.mapSearch(search);
      const { items } = await ytsr(mappedSearch, {
        limit: defLimit,
      });
      const mappedSongs = this.globalMap.mapSongs(items);
      songs = mappedSongs;
    }

    return songs;
  }

  async getMapRandomSongs(randomSongs: Array<string>): Promise<Song[] | any> {
    const totalSongs = randomSongs.length;
    const songs = [];
    for (let i = 0; i < totalSongs; i++) {
      const { items } = await ytsr(randomSongs[i], {
        limit: 1,
      });

      if (items.length < 1) continue;

      songs.push(items[0]);
    }
    const mappedSongs = this.globalMap.mapSongs(songs);
    return mappedSongs;
  }
}
